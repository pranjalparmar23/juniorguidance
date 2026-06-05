import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpRequest, HttpHandler,HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    let token: string | null = null;

    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('token');
    }

    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {

          if (
            (err.status === 401 || err.status === 403) &&
            isPlatformBrowser(this.platformId)
          ) {
            if (this.router.url !== '/login') {
              localStorage.removeItem('token');
              this.router.navigate(['/login']);
            }
          }
        }
        return throwError(() => err);
      })
    );
  }
}

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate {
  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  canActivate(route: any): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      if (route.routeConfig?.path === 'users') {
        const role = localStorage.getItem('role');
        if (token && role === 'ADMIN') {
          return true;
        }
        this.router.navigate(['/dashboard']);
        return false;
      }

      if (token) {
        return true;
      }
    }
    this.router.navigate(['/']);
    return false;
  }
}

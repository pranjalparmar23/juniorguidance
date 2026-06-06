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
        if (token && this.isAdmin(token)) {
          return true;
        }
        this.router.navigate(['/articleHub/dashboard']);
        return false;
      }

      if (token) {
        return true;
      }
    }
    this.router.navigate(['/']);
    return false;
  }

  private isAdmin(token: string): boolean {
    const storedRole = localStorage.getItem('role');
    if (storedRole === 'ADMIN') {
      return true;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload?.role === 'ADMIN';
    } catch {
      return false;
    }
  }
}

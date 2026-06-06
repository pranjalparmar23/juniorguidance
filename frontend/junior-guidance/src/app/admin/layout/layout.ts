import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { Confirmation } from '../dialog/confirmation/confirmation';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatDividerModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout implements OnInit {

  isAdmin = false;
  isMobile = false;

  constructor(private dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.isAdmin = this.getIsAdmin();
    this.updateViewportMode();
  }

  @HostListener('window:resize')
  updateViewportMode() {
    this.isMobile = window.innerWidth <= 768;
  }

  closeMenuOnMobile(sidenav: any) {
    if (this.isMobile) {
      sidenav.close();
    }
  }

  private getIsAdmin(): boolean {
    const role = localStorage.getItem('role');
    if (role === 'ADMIN') {
      return true;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload?.role === 'ADMIN';
    } catch {
      return false;
    }
  }

  logout() {
    const dialogConfig = new MatDialogConfig();;
    dialogConfig.data = {
      message: 'Logout'
    };
    const dialogRef = this.dialog.open(Confirmation, dialogConfig);
    const response = dialogRef.componentInstance.onEmitStatusChange.subscribe((response: any) => {
      dialogRef.close();
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('userId');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      this.router.navigate(['/']);
    })
  }
}

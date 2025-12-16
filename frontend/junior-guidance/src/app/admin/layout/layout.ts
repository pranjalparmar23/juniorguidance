import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { Confirmation } from '../dialog/confirmation/confirmation';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatDividerModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

  constructor(private dialog: MatDialog,
    private router: Router) {}

    logout() {
      const dialogConfig = new MatDialogConfig();;
      dialogConfig.data = {
        message: 'Logout'
      };
      const dialogRef = this.dialog.open(Confirmation, dialogConfig);
      const response = dialogRef.componentInstance.onEmitStatusChange.subscribe((response: any) => {
        dialogRef.close();
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      })
    }
}

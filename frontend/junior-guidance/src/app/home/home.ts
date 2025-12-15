import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { Theme } from '../services/theme';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // constructor(public theme:Theme) {}

  // changeTheme(color: any){
  //   this.theme.setTheme(this.theme.getTheme());
  // }
}

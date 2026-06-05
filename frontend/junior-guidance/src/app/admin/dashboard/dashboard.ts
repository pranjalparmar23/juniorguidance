import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  isAdmin = false;
  userName = 'User';

  ngOnInit(): void {
    const role = localStorage.getItem('role');
    const name = localStorage.getItem('name');
    this.isAdmin = role === 'ADMIN';
    this.userName = name || (this.isAdmin ? 'Admin' : 'User');
  }
}

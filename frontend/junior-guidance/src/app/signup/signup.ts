import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from '../services/app-user';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constant';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Snackbar } from '../services/snackbar';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements OnInit {
  signupForm!: FormGroup;
  responseMessage: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appUserService: AppUser,
    private ngxService: NgxUiLoaderService,
    private snackbarService: Snackbar
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRejex)]],
      password: [null, [Validators.required]]
    });
  }

  handleSignup() {
    if (!this.signupForm.valid) return;

    this.ngxService.start();
    const formData = this.signupForm.value;

    this.appUserService.addNewAppuser(formData).subscribe({
      next: (response: any) => {
        this.ngxService.stop();
        this.responseMessage = "Signup successful!";
        this.snackbarService.openSnackBar(this.responseMessage);
        this.router.navigate(['/login']); 
      },
      error: (error) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarService.openSnackBar(this.responseMessage);
      }
    });
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}

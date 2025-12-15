import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from '../services/app-user';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constant';
import { response } from 'express';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Snackbar } from '../services/snackbar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatFormFieldModule,MatInputModule,  ReactiveFormsModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit{
  loginForm!: FormGroup;
  responseMessage: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router, 
    private appuserService: AppUser,
    private ngxService: NgxUiLoaderService,
    private snackbarService: Snackbar){}

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email:[null, [Validators.required, Validators.pattern(GlobalConstants.emailRejex)]],
        password:[null, [Validators.required]]
      })
    }

    handleSubmit() {
      this.ngxService.start();
      var formData = this.loginForm.value;
      var data = {
        email: formData.email,
        password: formData.password
      }

      this.appuserService.login(data).subscribe((response:any) => {
        this.ngxService.stop();
        localStorage.setItem('token', response.token);
        this.router.navigate(['/articleHub/dashboard']);
      }, (error) => {
        console.log(error);
        this.ngxService.stop();
        if(error.error?.message){
          this.responseMessage = error.error?.message;
        }
        else{
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarService.openSnackBar(this.responseMessage);
      })
    }

    onBack() {
      this.router.navigate(['/']);
    }
}

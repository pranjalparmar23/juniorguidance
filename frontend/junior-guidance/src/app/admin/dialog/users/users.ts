import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Snackbar } from '../../../services/snackbar';
import { AppUser } from '../../../services/app-user';
import { GlobalConstants } from '../../../shared/global-constant';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class Users implements OnInit {
  onAddUser = new EventEmitter<void>();
  onEditUser = new EventEmitter<void>();
  usersForm!: FormGroup;
  dialogAction: string = "Add";
  action: string = "Add";
  responseMessage: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<Users>,
    private snackbar: Snackbar,
    private appuserService: AppUser,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    // Initialize form
    this.usersForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRejex)]],
      password: [null, [Validators.required]]
    });

    // If Edit mode, patch data and make password optional
    if (this.dialogData?.action === 'Edit') {
      this.dialogAction = "Edit";
      this.action = "Update";
      this.usersForm.patchValue(this.dialogData.data);

      // Password optional for Edit
      this.usersForm.get('password')?.clearValidators();
      this.usersForm.get('password')?.updateValueAndValidity();
    }
  }

  handleSubmit(): void {
    if (this.dialogAction === 'Edit') {
      this.editUser();
    } else {
      this.addUser();
    }
  }

  private addUser(): void {
    if (!this.usersForm.valid) return;

    this.ngxService.start();
    const formData = this.usersForm.value;

    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    this.appuserService.addNewAppuser(data).subscribe({
      next: (response: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        this.onAddUser.emit();
        this.responseMessage = response.message;
        this.snackbar.openSnackBar(this.responseMessage);
      },
      error: (error: any) => {
        this.ngxService.stop();
        this.responseMessage = error.error?.message || GlobalConstants.genericError;
        this.snackbar.openSnackBar(this.responseMessage);
      }
    });
  }

  private editUser(): void {
    if (!this.usersForm.valid) return;

    this.ngxService.start();
    const formData = this.usersForm.value;

    const data = {
      id: this.dialogData.data.id,
      name: formData.name,
      email: formData.email
    };

    this.appuserService.updateUser(data).subscribe({
      next: (response: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        this.onEditUser.emit();
        this.responseMessage = response.message;
        this.snackbar.openSnackBar(this.responseMessage);
      },
      error: (error: any) => {
        this.ngxService.stop();
        this.responseMessage = error.error?.message || GlobalConstants.genericError;
        this.snackbar.openSnackBar(this.responseMessage);
      }
    });
  }
}

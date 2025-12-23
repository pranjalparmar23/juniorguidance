import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Category } from '../../../services/category';
import { Snackbar } from '../../../services/snackbar';
import { GlobalConstants } from '../../../shared/global-constant';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatListModule, MatDialogModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class AppCategory implements OnInit {
  onAddCategory = new EventEmitter();
  onEditCategory = new EventEmitter();
  categoryForm!: FormGroup;
  dialogAction: string = "Add";
  action: string = "Add";
  responseMessage: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBuilder: FormBuilder,
    private categoryService: Category,
    public dialogRef: MatDialogRef<AppCategory>,
    private snackbar: Snackbar,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: [null, [Validators.required]]
    });
    if (this.dialogData?.action === 'Edit') {
      this.dialogAction = "Edit";
      this.action = "Update";
      this.categoryForm.patchValue(this.dialogData.data);
    }
  }

  handleSubmit() {
    if (this.dialogAction === 'Edit') {
      this.edit();
    }
    else {
      this.add();
    }
  }

  private add(): void {
    if(!this.categoryForm.valid) return;

    this.ngxService.start();
    const formData = this.categoryForm.value;
    const data = {
      name: formData.name
    };
    this.categoryService.addNewCategory(data).subscribe({
      next: (response: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        this.onAddCategory.emit();
        this.responseMessage = response.message;
        this.snackbar.openSnackBar(this.responseMessage);
      },
      error: (error: any) => {
        this.ngxService.stop();
        console.log(error);
        this.responseMessage = error.error?.message || GlobalConstants.genericError;
        this.snackbar.openSnackBar(this.responseMessage);
      }
    });
  }

  private edit(): void {
    if(!this.categoryForm.valid) return;
    this.ngxService.start();
    const formData = this.categoryForm.value;
    const data = {
      id: this.dialogData.data.id,
      name: formData.name
    };
    this.categoryService.updateCategory(data).subscribe({
      next: (response: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        this.onEditCategory.emit();
        this.responseMessage = response.message;
        this.snackbar.openSnackBar(this.responseMessage);
      },
      error: (error: any) => {
        this.ngxService.stop();
        console.log(error);
        this.responseMessage = error.error?.message || GlobalConstants.genericError;
        this.snackbar.openSnackBar(this.responseMessage);
      }
    });
  }
}

import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Snackbar } from '../../../services/snackbar';
import { Category } from '../../../services/category';
import { Article } from '../../../services/article';
import { GlobalConstants } from '../../../shared/global-constant';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [AngularEditorModule, ReactiveFormsModule, CommonModule, FormsModule, MatSelectModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule, MatListModule, MatOptionModule, MatDialogModule],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
export class AppArticle implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '300px',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

onAddArticle = new EventEmitter();
onEditArticle = new EventEmitter();
articleForm!: FormGroup;
dialogAction: string = "Add";
action: string = "Add";
categorys: any;
responseMessage: string = '';

constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
  private formBuilder: FormBuilder,
  private categoryService: Category,
  public dialogRef: MatDialogRef<AppArticle>,
  private snackbar: Snackbar,
  private ngxService: NgxUiLoaderService,
  private articleService: Article) { }

ngOnInit(): void {
  this.articleForm = this.formBuilder.group({
    title: [null, [Validators.required]],
    content: [null, [Validators.required]],
    categoryId: [null, [Validators.required]],
    status: [null, [Validators.required]]
  });
  this.articleForm.get('content')?.valueChanges.subscribe(() => {
    this.articleForm.markAsDirty();
  });
  if(this.dialogData?.action === 'Edit') {
  this.dialogAction = "Edit";
  this.action = "Update";
  this.articleForm.patchValue(this.dialogData.data);
  this.articleForm.markAsDirty();
}
this.getAllCategory();
this.ngxService.start();
  }

getAllCategory() {
  this.categoryService.getAllCategoryForSelection().subscribe((response: any) => {
    this.categorys = response;
    this.ngxService.stop();
  }, (error: any) => {
    this.ngxService.stop();
    console.log(error);
    if (error.error?.message) {
      this.responseMessage = error.error?.message;
    } else {
      this.responseMessage = GlobalConstants.genericError;
    }
    this.snackbar.openSnackBar(this.responseMessage);
  })
}

handleSubmit() {
  console.log(this.articleForm.value);
  console.log(this.articleForm.valid, this.articleForm.dirty);
  if (this.dialogAction === 'Edit') {
    this.edit();
  }
  else {
    this.add();
  }
}

  private add(): void {
  if(!this.articleForm.valid) return;

  this.ngxService.start();
  const formData = this.articleForm.value;
  const data = {
    title: formData.title,
    content: formData.content,
    categoryId: formData.categoryId,
    status: formData.status
  };
  this.articleService.addNewArticle(data).subscribe({
    next: (response: any) => {
      this.ngxService.stop();
      this.dialogRef.close();
      this.onAddArticle.emit();
      this.responseMessage = response.message;
      this.snackbar.openSnackBar(this.responseMessage);
    },
    error: (error: any) => {
      this.dialogRef.close();
      this.ngxService.stop();
      console.log(error);
      this.responseMessage = error.error?.message || GlobalConstants.genericError;
      this.snackbar.openSnackBar(this.responseMessage);
    }
  });
}

  private edit(): void {
  if(!this.articleForm.valid) return;

  this.ngxService.start();
  const formData = this.articleForm.value;
  const data = {
    id: this.dialogData.data.id,
    title: formData.title,
    content: formData.content,
    categoryId: formData.categoryId,
    status: formData.status
  };
  this.articleService.updateArticle(data).subscribe({
    next: (response: any) => {
      this.ngxService.stop();
      this.dialogRef.close();
      this.onEditArticle.emit();
      this.responseMessage = response.message;
      this.snackbar.openSnackBar(this.responseMessage);
    },
    error: (error: any) => {
      this.dialogRef.close();
      this.ngxService.stop();
      console.log(error);
      this.responseMessage = error.error?.message || GlobalConstants.genericError;
      this.snackbar.openSnackBar(this.responseMessage);
    }
  });
}
}

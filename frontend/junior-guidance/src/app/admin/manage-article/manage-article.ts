import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Snackbar } from '../../services/snackbar';
import { Router, RouterModule } from '@angular/router';
import { Article } from '../../services/article';
import { GlobalConstants } from '../../shared/global-constant';
import { MatTableDataSource } from '@angular/material/table';
import { Confirmation } from '../dialog/confirmation/confirmation';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { AppArticle } from '../dialog/article/article';
import { ViewArticle } from '../dialog/view-article/view-article';

@Component({
  selector: 'app-manage-article',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule, MatIconModule, MatTooltipModule, MatDialogModule, CommonModule, MatChipsModule, MatListModule],
  templateUrl: './manage-article.html',
  styleUrl: './manage-article.css'
})
export class ManageArticle implements OnInit {

  displayedColumns: string[] = ['title', 'categoryName', 'status', 'publication_date', 'edit'];
  dataSource: any;
  responseMessage: any;

  constructor(private articleService: Article,
    private ngxService: NgxUiLoaderService,
    private dialog: MatDialog,
    private snackbar: Snackbar,
    private router: Router) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }

  tableData() {
    this.articleService.getAllArticle().subscribe((response: any) => {
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource(response);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleAddAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Add'
    };
    dialogConfig.width = "850px";
    const dialogRef = this.dialog.open(AppArticle, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const res = dialogRef.componentInstance.onAddArticle.subscribe(
      (response: any) => {
        this.tableData();
      }
    )
  }

  handleViewAction(values: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'View',
      data: values
    };
    dialogConfig.width = "850px";
    const dialogRef = this.dialog.open(ViewArticle, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
  }

  handleEditAction(values: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Edit',
      data: values
    };
    dialogConfig.width = "850px";
    const dialogRef = this.dialog.open(AppArticle, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const res = dialogRef.componentInstance.onEditArticle.subscribe(
      (response: any) => {
        this.tableData();
      }
    )
  }

  onDelete(value: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'delete ' + value.title + ' article'
    };
    const dialogRef = this.dialog.open(Confirmation, dialogConfig);
    const res = dialogRef.componentInstance.onEmitStatusChange.subscribe((response: any) => {
      this.ngxService.start();
      this.deleteProduct(value.id);
      dialogRef.close();
    })
  }

  deleteProduct(id: any) {
    this.articleService.deleteArticle(id).subscribe((response: any) => {
      this.ngxService.stop();
      this.tableData();
      this.responseMessage = response?.message;
      this.snackbar.openSnackBar(this.responseMessage);
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
}

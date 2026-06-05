import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Category } from '../../services/category';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Snackbar } from '../../services/snackbar';
import { Router, RouterModule } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalConstants } from '../../shared/global-constant';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { AppCategory } from '../dialog/category/category';

@Component({
  selector: 'app-manage-category',
  standalone: true,
  imports: [RouterModule, CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatIconModule, MatTooltipModule, MatDialogModule],
  templateUrl: './manage-category.html',
  styleUrl: './manage-category.css'
})
export class ManageCategory implements OnInit {
  displayedColumns: string[] = ['name', 'edit'];
  dataSource: any;
  responseMessage: any;

  constructor(private categoryService: Category,
    private ngxService: NgxUiLoaderService,
    private dialog: MatDialog,
    private snackbar: Snackbar,
    private router: Router) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }

  tableData() {
    this.categoryService.getAllCategory().subscribe((response: any) => {
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
    const dialogRef = this.dialog.open(AppCategory, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const res = dialogRef.componentInstance.onAddCategory.subscribe(
      (response: any) => {
        this.tableData();
      }
    )
  }

  handleEditAction(values: any) { 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Edit',
      data: values
    };
    dialogConfig.width = "850px";
    const dialogRef = this.dialog.open(AppCategory, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const res = dialogRef.componentInstance.onEditCategory.subscribe(
      (response: any) => {
        this.tableData();
      }
    )
  }
}

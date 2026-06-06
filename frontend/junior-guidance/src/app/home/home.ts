import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { MatCardContent } from '@angular/material/card';
import { Snackbar } from '../services/snackbar';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Article } from '../services/article';
import { GlobalConstants } from '../shared/global-constant';
import { ArticleDetails } from '../article-details/article-details';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, MatToolbarModule, MatIconModule, RouterModule, MatCardModule, MatFormFieldModule, MatInputModule, MatLabel, MatCardContent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  responseMessage: any;
  articles: any;
  searchText:string = '';

  constructor(private httpClient: HttpClient,
  private dialog: MatDialog,
  private router: Router,
  private snackbar: Snackbar,
  private ngxService: NgxUiLoaderService,
  private articleService: Article
  ) {
    this.ngxService.start();
    this.tableData();
  }
  
  tableData() {
    this.articleService.getAllPublishedArticle().subscribe((response: any) => {
      this.articles = response;
      this.ngxService.stop();
    }, (error: any) => {
      this.ngxService.stop();
      console.log(error);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }
      else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbar.openSnackBar(this.responseMessage);
    })
  }

  filteredItems(): any{
    return this.articles?.filter((item:any) => 
      item.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  handleViewAction(values: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Edit',
      data: values
    };
    dialogConfig.width = '850px';
    dialogConfig.maxWidth = 'calc(100vw - 24px)';
    dialogConfig.maxHeight = 'calc(100vh - 24px)';
    dialogConfig.panelClass = 'article-details-dialog';
    const dialogRef = this.dialog.open(ArticleDetails, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    })
  }
}

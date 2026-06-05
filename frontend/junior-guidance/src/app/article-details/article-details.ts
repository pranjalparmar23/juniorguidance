import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SanitizeHtmlPipe } from '../pipe/sanitize-html-pipe';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatToolbarModule, MatIconModule, SanitizeHtmlPipe, DatePipe, CommonModule],
  templateUrl: './article-details.html',
  styleUrl: './article-details.css'
})
export class ArticleDetails {

  articleDetails: any;
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) {
    this.articleDetails = this.dialogData.data;
  }
}

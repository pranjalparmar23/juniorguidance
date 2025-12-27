import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { SanitizeHtmlPipe } from '../../../pipe/sanitize-html-pipe';

@Component({
  selector: 'app-view-article',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatDialogModule, SanitizeHtmlPipe],
  templateUrl: './view-article.html',
  styleUrl: './view-article.css'
})
export class ViewArticle implements OnInit {

  article: any;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) {}

  ngOnInit(): void {
      this.article = this.dialogData.data;
  }

}

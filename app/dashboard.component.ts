import { Component, OnInit } from '@angular/core';

import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles()
      .then(articles => this.articles = articles.slice(1, 5));
  }
}

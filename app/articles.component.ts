import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from './Article';
import { ArticleService } from './article.service';

@Component({
  moduleId: module.id,
  selector: 'my-articles',
  templateUrl: 'articles.component.html',
  styleUrls: [ 'articles.component.css' ],
  providers:[ArticleService]
})

export class ArticlesComponent implements OnInit {
  title = 'Articles';
  articles: Article[];
  selectedArticle: Article;

  constructor(
    private router: Router,
    private articleService: ArticleService) { }

  getArticles(): void {
    this.articleService.getArticles().then(articles => this.articles = articles);
  }

  ngOnInit(): void {
    this.getArticles();
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedArticle.id]);
  }
}

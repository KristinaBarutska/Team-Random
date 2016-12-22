import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ArticleService } from './article.service';
import { Article } from './Article';

@Component({
  moduleId: module.id,
  selector: 'my-article-detail',
  templateUrl: 'article-detail.component.html',
  styleUrls: [ 'article-detail.component.css' ]
})
export class ArticleDetailComponent implements OnInit{
    @Input()
    article: Article;
    constructor(
      private articleService: ArticleService,
      private route: ActivatedRoute,
      private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.articleService.getArticle(+params['id']))
      .subscribe(article => this.article = article);
  }
goBack(): void {
  this.location.back();
}
}

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { ArticlesComponent } from './articles.component';
import { ArticleDetailComponent } from './article-details.component';
import { DashboardComponent } from './dashboard.component';
import { ArticleService } from './article.service';
import { AppRoutingModule }     from './app-routing.module';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    
    AppComponent,
    ArticlesComponent,
    DashboardComponent,
    ArticleDetailComponent
  ],
  providers:[ArticleService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

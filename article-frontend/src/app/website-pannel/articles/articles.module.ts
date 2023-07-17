import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';

const routes: Routes = [
  { path: '', redirectTo: 'article', pathMatch: 'full' },
  { path: 'article', component: ListComponent },
  { path: 'article/:id', component: DetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListComponent, DetailComponent,FeaturedArticlesComponent],
})
export class ArticlesModule {}

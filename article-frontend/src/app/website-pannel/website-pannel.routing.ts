import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsitePannelComponent } from './website-pannel.component';
import { AboutUsComponent } from './static-pages/about-us/about-us.component';
import { ContactUsComponent } from './static-pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: WebsitePannelComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./articles/articles.module').then((m) => m.ArticlesModule),
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRouting {}

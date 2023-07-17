import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website-pannel/website-pannel.module').then((m) => m.WebsitePannelModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-pannel/admin-pannel.module').then((m) => m.AdminPannelModule),
  },
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}

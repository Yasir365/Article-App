import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsitePannelComponent } from './website-pannel.component';
import { WebsiteRouting } from './website-pannel.routing';
import { LayoutModule } from './layout/layout.module';
import { StaticPagesModule } from './static-pages/static-pages.module';

@NgModule({
  imports: [
    CommonModule,
    WebsiteRouting,
    LayoutModule,
    StaticPagesModule
  ],
  declarations: [WebsitePannelComponent]
})
export class WebsitePannelModule { }

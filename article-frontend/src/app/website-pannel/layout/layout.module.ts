import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent,BannerComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent,FooterComponent,BannerComponent]

})
export class LayoutModule { }

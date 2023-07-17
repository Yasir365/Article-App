import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [AboutUsComponent,ContactUsComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutUsComponent,ContactUsComponent]
})
export class StaticPagesModule { }

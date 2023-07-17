import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPannelComponent } from './admin-pannel.component';
import { AdminRouting } from './admin-pannel.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting
  ],
  declarations: [AdminPannelComponent]
})
export class AdminPannelModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { DashComponent } from './dash/dash.component';
import { NewDashComponent } from './new-dash/new-dash.component';


@NgModule({
  declarations: [DashComponent, NewDashComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }

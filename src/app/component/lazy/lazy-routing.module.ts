import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { NewDashComponent } from './new-dash/new-dash.component';

const routes: Routes = [
  {path:'', component: DashComponent},
  {path : 'new-lazy', component : NewDashComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {

 }

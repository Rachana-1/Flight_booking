import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NewUserComponent } from './component/new-user/new-user.component';
import { HeaderComponent } from './component/header/header.component';
import { DisplayComponent } from './component/display/display.component';
import { EditComponent } from './component/edit/edit.component';
import { AuthGuard} from './services/auth.guard';
import { DemoComponent } from './component/demo/demo.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch : 'full' },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'header', component: HeaderComponent},
  {path : 'login', component : LoginComponent},
  {path: 'new', component: NewUserComponent},
  {path : 'details', component: DisplayComponent},
  {path :'edit/:email', component : EditComponent},
  {path : 'lazyuser', loadChildren: './component/lazy/lazy.module#LazyModule'},
  {path : 'profile', component: DemoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

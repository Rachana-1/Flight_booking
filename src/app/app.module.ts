import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { JwtInterceptor } from './services/jwt.interceptor';
import { ErrorInterceptor} from './services/error.interceptor';
import { MatInputModule,
   MatButtonModule,
   MatSelectModule,
    MatIconModule ,
     MatCheckboxModule, MatTableModule, MatPaginatorModule, MatExpansionModule,MatRadioModule
,MatTabsModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import {  ReactiveFormsModule, FormsModule} from '@angular/forms'
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewUserComponent } from './component/new-user/new-user.component';
import { HeaderComponent } from './component/header/header.component';
import { DisplayComponent } from './component/display/display.component';
import { DemoComponent } from './component/demo/demo.component';
import { EditComponent } from './component/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NewUserComponent,
    HeaderComponent,
    DisplayComponent,
    DemoComponent,
    EditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatExpansionModule,
    MatTabsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [ MatExpansionModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    NgbModule],
  schemas : [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  entryComponents : [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(fas);
  }
 }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

//Yeni Eklenen modüller:
import { FormsModule } from '@angular/forms';//ngmodel çalışması için two-way
import { HttpClientModule } from '@angular/common/http'; // http post/get

import { AppRoutingModule } from './app-routing.module';//routing

//Componentlerimiz
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { HeaderComponent } from './components/theme/header/header.component';
import { FooterComponent } from './components/theme/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PagesComponent } from './components/admin/pages/pages.component';
import { AboutComponent } from './components/about/about.component';

//import { Funcs } from './needs/funcs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PagesComponent,
    AboutComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule    
  ],
  providers: [/*Funcs*/],//tüm sayfalara providers olarak eklenir.
  bootstrap: [AppComponent]
})
export class AppModule { }

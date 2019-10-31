import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { LoginComponent } from './components/login/login.component';
import { PagesComponent } from './components/admin/pages/pages.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [    
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent},    
  { path: 'login', component: LoginComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/pages', component: PagesComponent },
  { path: 'about', component: AboutComponent },
  //{ path: 'products/:productId', component: ProductDetailsComponent },  
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

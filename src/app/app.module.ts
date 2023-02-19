import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

const allLinks:Routes = [
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent},

  
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

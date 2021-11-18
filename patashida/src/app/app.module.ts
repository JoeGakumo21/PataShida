import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import{FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AboutComponent,
    ContactusComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

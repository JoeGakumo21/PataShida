import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AgroproductComponent } from './agroproduct/agroproduct.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PredictionComponent } from './prediction/prediction.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login' ,component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'agroproduct',component:AgroproductComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'home',component:HomeComponent},
  {path: 'prediction',component:PredictionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AboutComponent,LoginComponent,RegisterComponent,AgroproductComponent,ContactusComponent,HomeComponent,PredictionComponent]

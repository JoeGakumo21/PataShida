import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AgroproductComponent } from './agroproduct/agroproduct.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path:'about',component:AboutComponent},
  {path: 'login' ,component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'agroproduct',component:AgroproductComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'home',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

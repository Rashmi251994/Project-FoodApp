import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestauranthomeComponent } from './components/restauranthome/restauranthome.component';
import { LoginComponent } from './components/login/login.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CustomerhomeComponent } from './components/customerhome/customerhome.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RestoRegComponent } from './components/resto-reg/resto-reg.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'restohome',
    component:RestauranthomeComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'custohome',
    component:CustomerhomeComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

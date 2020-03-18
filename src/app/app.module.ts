import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RestauranthomeComponent } from './components/restauranthome/restauranthome.component';
import { HomeComponent } from './components/home/home.component';
import { ImgsliderComponent } from './components/imgslider/imgslider.component';
import { CustomerhomeComponent } from './components/customerhome/customerhome.component';
import { CustomerregComponent } from './components/customerreg/customerreg.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RestaurantregComponent } from './components/restaurantreg/restaurantreg.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestauranthomeComponent,
    HomeComponent,
    ImgsliderComponent,
    CustomerhomeComponent,
    CustomerregComponent,
    LoginComponent,
    CartComponent,
    ContactusComponent,
    AboutusComponent,
    RestaurantregComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

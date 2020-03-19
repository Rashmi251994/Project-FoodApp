import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RestauranthomeComponent } from './components/restauranthome/restauranthome.component';
import { HomeComponent } from './components/home/home.component';
import { ImgsliderComponent } from './components/imgslider/imgslider.component';
import { CustomerhomeComponent } from './components/customerhome/customerhome.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RestoRegComponent } from './components/resto-reg/resto-reg.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestauranthomeComponent,
    HomeComponent,
    ImgsliderComponent,
    CustomerhomeComponent,
    LoginComponent,
    CartComponent,
    ContactusComponent,
    AboutusComponent,
    NotfoundComponent,
    FooterComponent,
    RestoRegComponent,
    RegistrationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

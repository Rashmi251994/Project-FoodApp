import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RestauranthomeComponent } from './components/restauranthome/restauranthome.component';
import { HomeComponent } from './components/home/home.component';
import { ImgsliderComponent } from './components/imgslider/imgslider.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RestoRegComponent } from './components/resto-reg/resto-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestauranthomeComponent,
    HomeComponent,
    ImgsliderComponent,
    FooterComponent,
    RestoRegComponent
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

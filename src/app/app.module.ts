import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UICarouselModule } from 'ui-carousel';


import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/nav/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './home/intro/intro.component';
import { MyWorksComponent } from './home/my-works/my-works.component';
import { ServicesComponent } from './home/services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    IntroComponent,
    MyWorksComponent,
    ServicesComponent,
  ],
  imports: [
    UICarouselModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

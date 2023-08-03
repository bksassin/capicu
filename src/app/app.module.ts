import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';
import { MenuFullComponent } from './menu-full/menu-full.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    MenuComponent,
    LocationComponent,
    FooterComponent,
    MenuFullComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

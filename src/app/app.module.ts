import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component'
import {PlayersnameComponent } from './playersname/playersname.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarioComponent } from './mario/mario.component';
import { PeachDirective } from './peach.directive';
import { MapComponent } from './map/map.component';
import { MapService } from './map.service';
import { PlayerComponent } from './player/player.component';
import { PlayerMovementDirective } from './player-movement.directive';
import { SettingsComponent } from './settings/settings.component'
import { ROUTES } from './map/app-routes'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    MarioComponent,
    PeachDirective,
    MapComponent,
    PlayerComponent,
    PlayerMovementDirective,
    PlayersnameComponent,
    SettingsComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),

   
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MenuComponent } from './menu/menu.component'
import {PlayersnameComponent } from './playersname/playersname.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapService } from './map.service';
import { PlayerComponent } from './player/player.component';
import { SettingsComponent } from './settings/settings.component'
import { ROUTES } from './map/app-routes'
import { RouterModule } from '@angular/router'
import { GamestateService } from './gamestate.service';
import { GameloopService } from './gameloop.service';
import { GameOverComponent } from './game-over/game-over.component';
import { MechantComponent } from './mechant/mechant.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PlayerComponent,
    PlayersnameComponent,
    SettingsComponent,
    MenuComponent,

    GameOverComponent,

    MechantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule


  ],
  providers: [MapService, GamestateService, GameloopService],
  bootstrap: [AppComponent]
})
export class AppModule { }

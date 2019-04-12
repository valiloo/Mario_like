import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarioComponent } from './mario/mario.component';
import { PeachDirective } from './peach.directive';
import { MapComponent } from './map/map.component';
import { MapService } from './map.service';
import { PlayerComponent } from './player/player.component';
import { PlayerMovementDirective } from './player-movement.directive';
import { GamestateService } from './gamestate.service';


@NgModule({
  declarations: [
    AppComponent,
    MarioComponent,
    PeachDirective,
    MapComponent,
    PlayerComponent,
    PlayerMovementDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

   
  ],
  providers: [MapService, GamestateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

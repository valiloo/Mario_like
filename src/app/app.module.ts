import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarioComponent } from './mario/mario.component';
import { PeachDirective } from './peach.directive';
import { MapComponent } from './map/map.component';
import { MapService } from './map.service';
import { PlayerComponent } from './player/player.component';
import { PlayerMovementDirective } from './player-movement.directive';


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
    AppRoutingModule

   
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }

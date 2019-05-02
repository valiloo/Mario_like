import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { MapService, MapTheme } from '../map.service';
import { GameloopService } from '../gameloop.service';
import { GamestateService } from '../gamestate.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  map = []




  constructor(public mapService: MapService, private mapTheme: MapTheme, public gameLoop: GameloopService, public gameService: GamestateService) {


  }



  initMap(): void {
    this.map = this.mapService.getMap();

  }



  ngOnDestroy() {
    this.gameLoop.gameMusic.pause()
    this.gameLoop.gameMusic = null
  }



  ngOnInit() {


    this.initMap();
  }



  /* 
    startTimer() {
      this.interval = setInterval(() => {
        if(this.timeLeft <1000) {
          this.timeLeft++;
        } else {
          this.timeLeft = 0;
        }
      },1000)
    }  */




}
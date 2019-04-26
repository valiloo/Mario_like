import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapService, MapTheme } from '../map.service';
import { GameloopService } from '../gameloop.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  time: number = 0;
  map = []




  constructor(public mapService: MapService, private mapTheme: MapTheme, public gameLoop: GameloopService) {


  }



  initMap(): void {
    this.map = this.mapService.getMap();

  }

  
  public startChrono() {
    if (this.gameLoop.isTheEnd(this.gameLoop.playerBlocX, this.gameLoop.playerBlocY) === false) {
    setInterval(() => { if (this.time >= 0) this.time++; }, 1000);
    } else if (this.gameLoop.isTheEnd(this.gameLoop.playerBlocX, this.gameLoop.playerBlocY) === true){
      setInterval(() => this.time, 0 )
    }

  }

  
  



  ngOnInit() {

    this.startChrono();

    this.initMap();
  }


 

  /* startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft <1000) {
        this.timeLeft++;
      } else {
        this.timeLeft = 0;
      }
    },1000)
  } */

  


}
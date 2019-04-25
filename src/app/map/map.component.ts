import { Component, OnInit } from '@angular/core';
import { MapService, MapTheme } from '../map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  timeLeft: number = 0;
  interval;

  map = []



  constructor(public mapService: MapService, private mapTheme: MapTheme) {

  }



  initMap(): void {
    this.map = this.mapService.getMap();

  }


  ngOnInit() {
    this.initMap();
  }


 

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft <1000) {
        this.timeLeft++;
      } else {
        this.timeLeft = 0;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}


import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapService, MapTheme } from '../map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  time: number = 0;

  map = []



  constructor(public mapService: MapService, private mapTheme: MapTheme) {

  }



  initMap(): void {
    this.map = this.mapService.getMap();

  }

  

  



  ngOnInit() {
    setInterval(() => { if (this.time >= 0) this.time++; }, 1000);

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
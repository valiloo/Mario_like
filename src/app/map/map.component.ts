import { Component, OnInit } from '@angular/core';
import { MapService, MapTheme } from '../map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  map = []


  constructor(public mapService: MapService, private mapTheme: MapTheme) {

  }

  initMap(): void {
    this.map = this.mapService.getMap();

  }


  ngOnInit() {
    this.initMap();

  }

}



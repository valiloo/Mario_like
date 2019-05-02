import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { GameloopService } from '../gameloop.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  time: number = 0;

  counter = 10;
  intervalId = null;
  menuMusic


  /* onMouseOver(){
  this.mSpanColor=  "/assets/son/cool.mp3";
  }
  
  onMouseOut(){
    this.mSpanColor = "black";
  } */

  constructor(public loop : GameloopService) {

  }


  ngOnInit() {
    
    setInterval(() => { if (this.time >= 0) this.time++; }, 1000);
    this.loop.getSongMenu();
  }

 
}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

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

  constructor() {

  }


  ngOnInit() {
    this.menuMusic = new Audio()
    this.menuMusic.src = "assets/audio/musiqueMenu.mp3"
    this.menuMusic.load()
    this.menuMusic.play()
    setInterval(() => { if (this.time >= 0) this.time++; }, 1000);
    
  }

  ngOnDestroy() {
    this.menuMusic.pause()
    this.menuMusic = null
  }





}

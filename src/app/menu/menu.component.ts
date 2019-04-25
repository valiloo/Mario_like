import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  time: number = 0;

  counter = 10;
  intervalId = null;


  /* onMouseOver(){
  this.mSpanColor=  "/assets/son/cool.mp3";
  }
  
  onMouseOut(){
    this.mSpanColor = "black";
  } */

  constructor() {

  }

  /* @ViewChild('audioOption') audioPlayerRef: ElementRef;

  onAudioPlay() {
  this.audioPlayerRef.nativeElement.play();
  } */


  ngOnInit() {
    /*    this.onAudioPlay();
     */
    setInterval(() => { if (this.time >= 0) this.time++; }, 1000);

  }


}

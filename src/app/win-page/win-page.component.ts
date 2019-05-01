import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { GameloopService } from '../gameloop.service';

@Component({
  selector: 'app-win-page',
  templateUrl: './win-page.component.html',
  styleUrls: ['./win-page.component.scss']
})
export class WinPageComponent implements OnInit,OnDestroy {


  



  constructor(public gameloop: GameloopService) { }

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  onAudioPlay() {
    this.audioPlayerRef.nativeElement.play();
  }





  ngOnInit() {
    this.onAudioPlay();
    this.gameloop.pause()
  }
  ngOnDestroy() {

    this.gameloop.reInit()
  }

}

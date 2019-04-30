import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GameloopService } from '../gameloop.service';

@Component({
  selector: 'app-win-page',
  templateUrl: './win-page.component.html',
  styleUrls: ['./win-page.component.scss']
})
export class WinPageComponent implements OnInit {



  endTime = this.gameloop.endTime

  constructor(private gameloop: GameloopService) { }

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  onAudioPlay() {
    this.audioPlayerRef.nativeElement.play();
  }




  ngOnInit() {
    this.onAudioPlay();
    this.gameloop.pause()
    this.gameloop.reInit()
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GameloopService } from '../gameloop.service';

@Component({
  selector: 'app-game-overapp',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  constructor() { }
  marche: string = "menu"

  tryAgain() {
    alert(this.marche)
  }

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  onAudioPlay() {
    this.audioPlayerRef.nativeElement.play();
  }


  ngOnInit() {
    this.onAudioPlay();
  }

}

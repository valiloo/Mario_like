import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GameloopService } from '../gameloop.service';
import { GamestateService } from '../gamestate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from '../map/app-routes'

@Component({
  selector: 'app-game-overapp',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  constructor(public gameState: GamestateService, public gameLoopService : GameloopService, public route : Router,) { }
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

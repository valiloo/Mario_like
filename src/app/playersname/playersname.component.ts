import { Component, OnInit } from '@angular/core';
import { GamestateService } from '../gamestate.service';
import { GameloopService } from '../gameloop.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-playersname',
  templateUrl: './playersname.component.html',
  styleUrls: ['./playersname.component.scss']
})
export class PlayersnameComponent implements OnInit {


  constructor(public gameState: GamestateService, public loop: GameloopService) {

  }

  ngOnInit() {
    this.loop.getSongMenu()

  }

  ngOnDestroy() {
    this.loop.menuMusic.pause()
    this.loop.menuMusic = null
  }

}
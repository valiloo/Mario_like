import { Component, OnInit } from '@angular/core';
import { GamestateService } from '../gamestate.service';
import { GameloopService } from '../gameloop.service';

@Component({
  selector: 'app-playersname',
  templateUrl: './playersname.component.html',
  styleUrls: ['./playersname.component.scss']
})
export class PlayersnameComponent implements OnInit {

  constructor(public gameState: GamestateService, public loop:GameloopService) { }

  ngOnInit() {
  
}
}
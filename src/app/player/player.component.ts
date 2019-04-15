import { Component, OnInit, HostListener } from '@angular/core';
import { GamestateService, MOVE_RIGHT, MOVE_LEFT, DONT_MOVE } from '../gamestate.service';


export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  SPACE = 32
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],

})

export class PlayerComponent implements OnInit {

  constructor(public gameService : GamestateService) {}

  @HostListener('window:keydown', [('$event')]) handleMovement(event: KeyboardEvent) {

    event.preventDefault()

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.gameService.move = MOVE_RIGHT
      console.log(this.gameService.move)
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.gameService.move = MOVE_LEFT
      console.log(this.gameService.move)
    }
  }

  @HostListener('window:keyup', [('$event')]) stopMovement(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
     this.gameService.move = DONT_MOVE
     console.log(this.gameService.move)
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.gameService.move = DONT_MOVE
      console.log(this.gameService.move)
    }
  }
  
  
  ngOnInit() {
    
  }
}

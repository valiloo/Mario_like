import { Component, OnInit, HostListener,HostBinding, ElementRef, AfterViewInit } from '@angular/core';
import { GamestateService, MOVE_RIGHT, MOVE_LEFT} from '../gamestate.service';
import { GameloopService } from '../gameloop.service';

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



constructor(public gameService : GamestateService, public element:ElementRef, public loop : GameloopService) {}

public move : any

  @HostListener('window:keydown', [('$event')]) handleMovement(event: KeyboardEvent) {

    event.preventDefault()

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {

      this.gameService.move = MOVE_RIGHT
      console.log(this.gameService.move)
      console.log(this.loop.move)

    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW){

      this.gameService.move = MOVE_LEFT
      console.log(this.gameService.move)
      console.log(this.loop.move)

    }

  }

  @HostListener('window:keyup', [('$event')]) stopMovement(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW || event.keyCode === KEY_CODE.LEFT_ARROW) {
     this.gameService.move = 0
     console.log(this.gameService.move)
    }
  }


  ngOnInit() {

    setInterval(() => {
      this.loop.start();
  }, 1000/60);


  }

      
  }
    
  




 


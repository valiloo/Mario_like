import { Component, OnInit, HostListener,HostBinding, ElementRef, AfterViewInit } from '@angular/core';
import { GamestateService, MOVE_RIGHT, MOVE_LEFT, MOVE_FORWARD, MOVE_BACKWARD, MOVE_UPWARD} from '../gamestate.service';
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

public refresh : any

constructor(public gameService : GamestateService, public element:ElementRef, public loop : GameloopService) {}

public move : any

  
  @HostListener('window:keydown', [('$event')]) handleMovement(event: KeyboardEvent) {

    event.preventDefault()

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {

      this.gameService.xVelocity = MOVE_FORWARD
      this.gameService.move = MOVE_RIGHT

    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW){

      this.gameService.xVelocity = MOVE_BACKWARD
      this.gameService.move = MOVE_LEFT


    }

    //  if (event.keyCode === KEY_CODE.SPACE){

    //    this.gameService.yVelocity = MOVE_UPWARD
    //    this.loop.jump = 1
    //    console.log(this.loop.yAxis)
    //  }

  }

  @HostListener('window:keyup', [('$event')]) stopMovement(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW || event.keyCode === KEY_CODE.LEFT_ARROW) {
      
     this.gameService.move = 0
 
    }

    if(event.keyCode === KEY_CODE.SPACE){

      this.gameService.yVelocity = MOVE_UPWARD
 
    }
    
  }


  ngOnInit() {

    this.refresh = (timestamp) => {
      this.loop.start();
      requestAnimationFrame(this.refresh)
  }
  requestAnimationFrame(this.refresh)
  }

      
  }
    
  




 


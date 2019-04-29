
import { Component, OnInit, HostListener, HostBinding, ElementRef, AfterContentChecked, AfterContentInit, DoCheck } from '@angular/core';
import { GamestateService, MOVE_RIGHT, MOVE_LEFT, MOVE_FORWARD, MOVE_BACKWARD, MOVE_UPWARD, ISONFIRE, FINTIR, DASH } from '../gamestate.service';
import { GameloopService } from '../gameloop.service';
import { MapService } from '../map.service';
import { MenuComponent } from '../menu/menu.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  SPACE = 32,
  PAUSE = 13,
  EPOWER = 69,
  DASH = 82
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],

})

export class PlayerComponent implements OnInit{

  public refresh: any
  public move: any
  public x: number
  public y: number
  @HostBinding('style.position') myPosition: any

  constructor(public gameService: GamestateService, public element: ElementRef, public loop: GameloopService, public mapService: MapService) {
  }
  
  @HostListener('window:keydown', [('$event')]) handleMovement(event: KeyboardEvent) {

    event.preventDefault()


    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.gameService.xVelocity = MOVE_FORWARD
      this.gameService.move = MOVE_RIGHT
    }


    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.gameService.xVelocity = MOVE_BACKWARD
      this.gameService.move = MOVE_LEFT
    }

    if (event.keyCode === KEY_CODE.SPACE) {
      this.gameService.yVelocity = MOVE_UPWARD
    }

    if(event.keyCode === KEY_CODE.EPOWER) {

      this.gameService.isOnFire = ISONFIRE
      this.gameService.xVelocity = 0
      this.gameService.yVelocity = 0

    }
    if (event.keyCode === KEY_CODE.DASH){
      this.gameService.dash = DASH
  
    }
  }

  @HostListener('window:keyup', [('$event')]) stopMovement(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW || event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.gameService.move = 0
    }

    if (event.keyCode === KEY_CODE.SPACE) {
      this.gameService.yVelocity = 0
    }

     if(event.keyCode === KEY_CODE.EPOWER){

       this.gameService.isOnFire = FINTIR
     }

     if (event.keyCode === KEY_CODE.DASH){
      this.gameService.dash = 0
      
     }


  }

  

ngOnInit(){
  this.loop.start()
  
}


}









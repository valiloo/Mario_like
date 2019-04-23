import { Injectable, Output, EventEmitter } from '@angular/core';
import { GamestateService, MOVE_RIGHT, MOVE_LEFT, MOVE_FORWARD, MOVE_BACKWARD, MOVE_UPWARD } from './gamestate.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { MapTheme, MapService, VI } from './map.service';




@Injectable({
  providedIn: 'root'
})
export class GameloopService {

  public canGoThrough
  public canMove


  public jump: number = 0
  public move: number
  public xAxis: number = 0
  public yAxis: number = 0
  public scaleX: number

  constructor(public gameService: GamestateService,public mapTheme: MapTheme, public mapService: MapService) { }

  start(): any {

    this.canMove = () => {

          if (this.jump > 0) {

            this.jump -= 1

          }

          if (this.yAxis < 0){


            this.yAxis += 4

          }

          if (((this.gameService.move === MOVE_RIGHT) || (this.gameService.move === MOVE_LEFT)) && this.gameService.xVelocity === MOVE_FORWARD) {

            this.scaleX = -1
            this.xAxis += 10
            this.move = 1


      }

          if (((this.gameService.move === MOVE_RIGHT) || (this.gameService.move === MOVE_LEFT)) && this.gameService.xVelocity === MOVE_BACKWARD) {

            this.scaleX = 1
            this.xAxis -= 3
            this.move = 1

      }

          if (this.gameService.yVelocity === MOVE_UPWARD){

            this.jump = 45
            this.yAxis -= 230
            this.gameService.yVelocity = 0

          }

          else if ((this.gameService.move !== MOVE_RIGHT) && (this.gameService.move !== MOVE_LEFT)) {

           this.move = 0

      }
      
    }
  
    this.canMove()
    
    this.canGoThrough = () => {

    for(let x= 0; x < this.mapService.map.length ; x++){
      for(let y= 0; y < this.mapService.map[x].length; y++){

        if(this.mapTheme.textures[y] === VI){
            this.yAxis +=5
        }
      }
    }
    }
  }
}

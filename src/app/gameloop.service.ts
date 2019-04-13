import { Injectable, Output, EventEmitter } from '@angular/core';
import { GamestateService, MOVE_RIGHT, MOVE_LEFT, MOVE_FORWARD, MOVE_BACKWARD } from './gamestate.service';
import { BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GameloopService {



public move : boolean
public xAxis : number = 0
public yAxis : number
public scaleX: number

  constructor(public gameService : GamestateService) { }

  start(): any{

    if(((this.gameService.move === MOVE_RIGHT)||(this.gameService.move === MOVE_LEFT)) && this.gameService.xVelocity === MOVE_FORWARD){
        this.scaleX = -1
        this.xAxis += 3
        this.move = true 
          
        
    }

    if(((this.gameService.move === MOVE_RIGHT)||(this.gameService.move === MOVE_LEFT)) && this.gameService.xVelocity === MOVE_BACKWARD){

      this.scaleX = 1
      this.xAxis -= 3
      this.move = true
    }


    else if ((this.gameService.move !== MOVE_RIGHT) && (this.gameService.move !== MOVE_LEFT)) {
      
      this.move = false

    }
   
  }

}

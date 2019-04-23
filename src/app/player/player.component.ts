import { Component, OnInit, HostListener,HostBinding, ElementRef} from '@angular/core';
import { GamestateService, MOVE_RIGHT, MOVE_LEFT, MOVE_FORWARD, MOVE_BACKWARD, MOVE_UPWARD} from '../gamestate.service';
import { GameloopService } from '../gameloop.service';
import { MapService } from '../map.service';

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


@HostBinding('style.position') myPosition : any

constructor(public gameService : GamestateService, public element:ElementRef, public loop : GameloopService, public mapService:MapService) {


  this.y = this.loop.yAxis
  this.x = this.loop.xAxis

  this.myPosition = `top(${this.y} left(${this.x}))`
}

public refresh : any
public move : any
public x : number
public y : number



  @HostListener('window:keydown', [('$event')]) handleMovement(event: KeyboardEvent) {

    event.preventDefault()

    if (event.keyCode === KEY_CODE.RIGHT_ARROW ) {

      this.gameService.xVelocity = MOVE_FORWARD
      this.gameService.move = MOVE_RIGHT
     
      console.log(this.loop.xAxis)
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW){

      this.gameService.xVelocity = MOVE_BACKWARD
      this.gameService.move = MOVE_LEFT
      console.log(this.x)



    }

     if (event.keyCode === KEY_CODE.SPACE){
        if(this.loop.yAxis >= 150){
          this.gameService.yVelocity = 0
          console.log(this.y)
        }
        else{
          
       this.gameService.yVelocity = MOVE_UPWARD
       
        console.log(this.y)
        }
     }

  }

  @HostListener('window:keyup', [('$event')]) stopMovement(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW || event.keyCode === KEY_CODE.LEFT_ARROW) {
      
     this.gameService.move = 0
 
    }

    if(event.keyCode === KEY_CODE.SPACE){

      this.gameService.yVelocity = 0
      console.log(this.y)

 
    }
    
  }


  ngOnInit() {

    this.refresh = (timestamp) => {
      this.loop.start();
      this.y = this.loop.yAxis
      this.x = this.loop.xAxis
      requestAnimationFrame(this.refresh)
  }
  requestAnimationFrame(this.refresh)
  }

      
  }
    
  




 


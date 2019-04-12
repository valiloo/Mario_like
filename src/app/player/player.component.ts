import { Component, OnInit, HostListener } from '@angular/core';
import { GamestateService } from '../gamestate.service';


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


    positionX: number = 0
    positionY: number = 0
    moveLeft: boolean
    moveRight: boolean 


  constructor(public gameService : GamestateService) {}

  @HostListener('window:keydown', [('$event')]) handleMovement(event: KeyboardEvent) {

    event.preventDefault()

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.moveRight == true
      this.moveLeft == false
      console.log(this.moveRight)
      console.log(this.moveLeft)

    }

    if (this.moveRight === true && this.moveLeft === false) {
      this.positionX += 1
      
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.moveLeft == true
      this.moveRight == false
      console.log(this.moveRight)
      console.log(this.moveLeft)
    }

    if (this.moveLeft == true && this.moveRight == false) {
      this.positionX -= 1
      
    }

  }

  @HostListener('window:keyup', [('$event')]) stopMovement(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW || event.keyCode === KEY_CODE.LEFT_ARROW) {
     
    }
  }

  sendPlayer(){
    
  }

  ngOnInit() {
    
  }
}

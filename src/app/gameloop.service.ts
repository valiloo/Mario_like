import { Injectable } from '@angular/core';
import { GamestateService, MOVE_RIGHT, MOVE_LEFT, MOVE_FORWARD, MOVE_BACKWARD, MOVE_UPWARD } from './gamestate.service';
import { MapTheme, MapService, VI } from './map.service';




@Injectable({
  providedIn: 'root'
})
export class GameloopService {


  public jump: number = 0
  public move: number
  public xAxis: number = 0
  public yAxis: number = 0
  public scaleX: number
  public innerWidth
 

  constructor(public gameService: GamestateService, public mapTheme: MapTheme, public mapService: MapService) { }

  

  public canMove() {

    if (this.jump > 0) {

      this.jump -= 1

    }

    if (this.gameService.playerY < 0) {


      this.gameService.playerY += 4

    }

    if ((this.gameService.move === MOVE_RIGHT)  && this.gameService.xVelocity === MOVE_FORWARD) {

            this.gameService.playerScaleX = -1
            this.gameService.playerX += 7
            this.move = 1


    }

    if ((this.gameService.move === MOVE_LEFT) && this.gameService.xVelocity === MOVE_BACKWARD) {

      this.gameService.playerScaleX = 1
      this.gameService.playerX -= 7
      this.move = 1
      
    }

    if (this.gameService.yVelocity === MOVE_UPWARD) {


      this.jump = 45
      this.gameService.playerY -= 230
      this.gameService.yVelocity = 0
      console.log(this.gameService.playerY)

    }

    else if ((this.gameService.move !== MOVE_RIGHT) && (this.gameService.move !== MOVE_LEFT)) {

      this.move = 0

    }

  }
  cameraLock(){

    this.innerWidth = window.innerWidth

    window.scroll(this.gameService.playerX - ((this.innerWidth /2) -27), this.gameService.playerY)
  }
  loop() {
    this.canMove()
    this.cameraLock()
    requestAnimationFrame(() => this.loop())
  }

  start() {
    this.loop()
  }
  pause() {

  }

 
}

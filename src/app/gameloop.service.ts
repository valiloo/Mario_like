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
  public xMechant: boolean = false


  constructor(public gameService: GamestateService, public mapTheme: MapTheme, public mapService: MapService) { }



  public canMove() {
    this.xMechant = !this.xMechant

    if (this.xMechant === true) {
      this.gameService.mechantVelocity += 10

    }
    else {
      this.gameService.mechantVelocity -= 10
    }

    if (this.jump > 0) {

      this.jump -= 1

    }

    if (this.yAxis < 0) {


      this.yAxis += 4

    }

    if (((this.gameService.move === MOVE_RIGHT) || (this.gameService.move === MOVE_LEFT)) && this.gameService.xVelocity === MOVE_FORWARD) {

      this.scaleX = -1
      this.xAxis += 2
      this.move = 1



    }

    if (((this.gameService.move === MOVE_RIGHT) || (this.gameService.move === MOVE_LEFT)) && this.gameService.xVelocity === MOVE_BACKWARD) {

      this.scaleX = 1
      this.xAxis -= 15
      this.move = 1

    }

    if (this.gameService.yVelocity === MOVE_UPWARD) {


      this.jump = 45
      this.yAxis -= 230
      this.gameService.yVelocity = 0


    }

    else if ((this.gameService.move !== MOVE_RIGHT) && (this.gameService.move !== MOVE_LEFT)) {

      this.move = 0

    }

  }

  moveMonster(){
    for(let monster in this.mapService.monsters){
      monster.posX += 0.01;
    }
  }

  loop() {
    this.canMove()
    this.moveMonster()
    requestAnimationFrame(() => this.loop())
  }

  start() {
    this.loop()
  }

  pause() {

  }
}

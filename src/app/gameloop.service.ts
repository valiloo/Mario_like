import { Injectable } from '@angular/core';
import { GamestateService, MOVE_RIGHT, MOVE_LEFT, MOVE_FORWARD, MOVE_BACKWARD, MOVE_UPWARD } from './gamestate.service';

import { MapTheme, MapService, } from './map.service';






@Injectable({
  providedIn: 'root'
})
export class GameloopService {


  public jump: number = 0
  public move: number
  public xAxis: number = 0
  public yAxis: number = 0
  public scaleX: number
  public innerWidth;
  public playerBlocY
  public playerBlocX
  public cell: any





  constructor(public gameService: GamestateService, public mapTheme: MapTheme, public mapService: MapService) { }




  public canMove() {

    if (this.jump > 0) {

      this.jump -= 1

    }

    if (this.gameService.playerY < 657 && this.getBottomCollision(this.playerBlocX, this.playerBlocY)) {

      this.gameService.playerY += 4
    }


    if ((this.gameService.move === MOVE_RIGHT) && this.gameService.xVelocity === MOVE_FORWARD && this.getRightCollision(this.playerBlocX, this.playerBlocY)) {

      this.gameService.playerScaleX = -1
      this.gameService.playerX += 8
      this.move = 1





    }

    if ((this.gameService.move === MOVE_LEFT) && this.gameService.playerX > 12 && this.gameService.xVelocity === MOVE_BACKWARD && this.getLeftCollision(this.playerBlocX, this.playerBlocY)) {

      this.gameService.playerScaleX = 1

      this.gameService.playerX -= 8
      
      this.move = 1

    }

    if (this.gameService.yVelocity === MOVE_UPWARD && this.gameService.playerY > 150 && this.getTopCollision(this.playerBlocX, this.playerBlocY)) {
      for (let i = 0; i <= 4; i ++) {
        if (this.getTopCollision(this.playerBlocX, this.playerBlocY)) {
          this.gameService.playerY -= 32
          this.jump = 45
          this.gameService.yVelocity = 0
      }
    }
  }



    if (this.gameService.playerX < 0) {

      this.gameService.playerX = 0
    }



    else if ((this.gameService.move !== MOVE_RIGHT) && (this.gameService.move !== MOVE_LEFT)) {

      this.move = 0

    }
  }

  cameraLock() {

    this.innerWidth = window.innerWidth
    window.scroll(this.gameService.playerX - ((this.innerWidth / 2) - 27), this.gameService.playerY)
  }



  moveMonster() {
    for (let index in this.mapService.monsters) {
      const monster = this.mapService.monsters[index]

      if (monster.direction == MOVE_RIGHT) {
        monster.posX += 0.1;
        if (monster.initPosX + monster.amplitude < monster.posX) {
          monster.direction = MOVE_LEFT
        }
      }
      else if (monster.direction == MOVE_LEFT) {
        monster.posX -= 0.1;
        if (monster.initPosX - monster.amplitude > monster.posX) {
          monster.direction = MOVE_RIGHT
        }
      }
    }

  }
  moveOgr() {
    for (let index in this.mapService.ogrs) {
      const ogr = this.mapService.ogrs[index]

      if (ogr.direction == MOVE_RIGHT) {
        ogr.posX += 0.1;
        if (ogr.initPosX + ogr.amplitude < ogr.posX) {
          ogr.direction = MOVE_LEFT
        }
      }
      else if (ogr.direction == MOVE_LEFT) {
        ogr.posX -= 0.1;
        if (ogr.initPosX - ogr.amplitude > ogr.posX) {
          ogr.direction = MOVE_RIGHT
        }
      }
    }

  }



  getRightCollision(playerBlocX, playerBlocY): boolean {
    this.playerBlocY = Math.round((this.gameService.playerY) / 32)
    this.playerBlocX = Math.round((this.gameService.playerX) / 32)
    this.cell = this.mapService.map[this.playerBlocY][this.playerBlocX + 1]

    if (this.mapTheme.blocs[this.cell].canGoThrough === false) {

      return false
    }
    else if (this.mapTheme.blocs[this.cell].canGoThrough === true) {
      return true
    }
  }

  getBottomCollision(playerBlocX, playerBlocY): boolean {
    this.playerBlocY = Math.round((this.gameService.playerY) / 32)
    this.playerBlocX = Math.round((this.gameService.playerX) / 32)
    this.cell = this.mapService.map[this.playerBlocY + 1][this.playerBlocX]

    if (this.mapTheme.blocs[this.cell].canGoThrough === false) {

      return false
    }
    else if (this.mapTheme.blocs[this.cell].canGoThrough === true) {
      return true
    }
  }

  getLeftCollision(playerBlocX, playerBlocY): boolean {
    this.playerBlocY = Math.round((this.gameService.playerY) / 32)
    this.playerBlocX = Math.round((this.gameService.playerX) / 32)
    this.cell = this.mapService.map[this.playerBlocY][this.playerBlocX - 1]

    if (this.mapTheme.blocs[this.cell].canGoThrough === false) {

      return false
    }
    else if (this.mapTheme.blocs[this.cell].canGoThrough === true) {
      return true
    }
  }

  getTopCollision(playerBlocX, playerBlocY) {
    this.playerBlocY = Math.round((this.gameService.playerY) / 32)
    this.playerBlocX = Math.round((this.gameService.playerX) / 32)
    this.cell = this.mapService.map[this.playerBlocY - 1][this.playerBlocX]
    if (this.mapTheme.blocs[this.cell].canGoThrough === false) {
      return false
    }
    else if (this.mapTheme.blocs[this.cell].canGoThrough === true) {
      return true
    }
  }




  loop() {
    this.canMove()
    this.moveMonster()
    this.moveOgr()
    this.cameraLock()
    requestAnimationFrame(() => this.loop())
    console.log(this.gameService.playerY)
  }

  start() {
    this.loop()


  }

  pause() {

  }


}

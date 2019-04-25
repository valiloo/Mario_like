import { Injectable } from '@angular/core';
import { GamestateService, MOVE_RIGHT, MOVE_LEFT, MOVE_FORWARD, MOVE_BACKWARD, MOVE_UPWARD } from './gamestate.service';

import { MapTheme, MapService, } from './map.service';
import { GameOverComponent } from './game-over/game-over.component';

import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from './map/app-routes'






@Injectable({
  providedIn: 'root'
})
export class GameloopService {


  public jump: number = 0
  public move: number
  public x: number = 0
  public y: number = 0
  public scaleX: number
  public innerWidth;
  public mapPosition = Math.round((this.gameService.playerY+this.gameService.playerHeight)/ 32)


  constructor(public gameService: GamestateService, public mapTheme: MapTheme, public mapService: MapService, public route : Router) { }



  public canMove() {

    if (this.jump > 0) {

      this.jump -= 1

    }

    if (this.gameService.playerY < 567) {


      this.gameService.playerY += 4

    }

    if ((this.gameService.move === MOVE_RIGHT)  && this.gameService.xVelocity === MOVE_FORWARD) {


      this.gameService.playerScaleX = -1
      this.gameService.playerX += 3
      this.move = 1

      


    }

    if ((this.gameService.move === MOVE_LEFT) && this.gameService.xVelocity === MOVE_BACKWARD) {

      this.gameService.playerScaleX = 1

      this.gameService.playerX -= 3

      this.move = 1
      
    }

    if (this.gameService.yVelocity === MOVE_UPWARD) {


      this.jump = 45
      this.gameService.playerY -= 230
      this.gameService.yVelocity = 0
      

    }

    if (this.gameService.playerX > 20){
  
      this.route.navigate(['/Over'])
      this.gameService.playerX=12;
    }
   if(this.gameService.playerX < 0){

      this.gameService.playerX = 0
    }
<<<<<<< HEAD
=======
  
    

    // if(this.gameService.playerY + this.gameService.playerHeight === ){

      //  this.gameService.playerY = case.y - this.gameService.playerHeight

    // }
    // if(this.gameService.playerY - this.gameService.playerHeight === ){

    //  this.gameService.playerY = case.y + this.gameService.playerHeight

    // }
>>>>>>> 796aab34756d12c77e83802a5ac34553e702424e

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
        ogr.posX += 0.02;
        if (ogr.initPosX + ogr.amplitude < ogr.posX) {
          ogr.direction = MOVE_LEFT
        }
      }
      else if (ogr.direction == MOVE_LEFT) {
        ogr.posX -= 0.02;
        if (ogr.initPosX - ogr.amplitude > ogr.posX) {
          ogr.direction = MOVE_RIGHT
        }
      }
    }

  
}

  loop() {
    this.canMove()
    this.moveMonster()
    this.moveOgr()
<<<<<<< HEAD
=======
    
>>>>>>> 796aab34756d12c77e83802a5ac34553e702424e
    this.cameraLock()
    requestAnimationFrame(() => this.loop())
  }

  start() {
    this.loop()
  }

  pause() {
    cancelAnimationFrame(0)
  }

}


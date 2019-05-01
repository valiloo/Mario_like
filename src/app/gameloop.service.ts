import { Injectable } from '@angular/core';

import { GamestateService, MOVE_RIGHT, MOVE_LEFT, MOVE_FORWARD, MOVE_BACKWARD, MOVE_UPWARD, ISONFIRE, FINTIR, ISDEAD, DASH, THROWAXES, ISANINJA, SHOOTTHEMALL } from './gamestate.service';
import { MapTheme, MapService, } from './map.service';
import { Tir } from './models/tir'
import { Router } from '@angular/router';
import { OsMonster } from './models/monster';
import { OgrMonster } from './models/ogr';
import { SlimMonster } from './models/slim';
import { Axes } from './models/axes';
import { DruidMonster } from './models/druid';
import { BossMonster} from './models/boss';







@Injectable({
  providedIn: 'root'
})
export class GameloopService {


  public lastKick = new Date()
  public goNinja = new Date()
  public lastAxesDate = new Date()
  public compt: number = 0
  public jump: number = 0
  public move: number
  public x: number = 0
  public y: number = 0
  public scaleX: number
  public innerWidth;
  public outerWidth;
  public playerBlocY
  public playerBlocX
  public cell: any
  public ennemiPosX: any
  public ennemiPosY: any
  public canJump: boolean
  public stop = false
  public fireBall
  public lastFireballDate = new Date();
  public isDead = new Date();
  //public startTime: number
  //public endTime: number
  //public canStopTime: boolean = true
  public jumpNumber: number = 2
  public jumpSound
  public gameMusic
  public gunSound
  public timerEndFire: number = 5
  public lastFireBall
  public fireBlocX: number = this.gameService.playerX
  public fireBlocY = this.gameService.playerY
  public dashCount = 2
  public dash = new Date()
  public osDie
  public jumpDown
  public deathSound
  public lockScale
  public lastPosX
  public axeSound
  // this.deathSound = new Audio()
  //this.deathSound.src = "assets/audio/death.ogg"
  //this.deathSound.load()
  //this.deathSound.play()






  constructor(public gameService: GamestateService, public mapTheme: MapTheme, public mapService: MapService, public route: Router) { }

  playGameMusic() {
    this.gameMusic = new Audio();
    this.gameMusic.src = "assets/audio/map2.mp3"
    this.gameMusic.load()
    this.gameMusic.play()
  }


  // fonction globale encadrant tout les types de deplacements //
  public canMove() {





    this.stop = false



    if (this.jump > 0) {

      this.jump -= 1

    }



    if (this.getBottomCollision(this.playerBlocX, this.playerBlocY) === false && this.gameService.isOnFire === 0 && this.gameService.death !== ISDEAD) { // si le joueur touche le sol il peut ressauter //
      this.canJump = true
      this.jumpNumber = 2
      this.jumpDown = 0
    }

    // gere la gravité, fait redescendre le personnage jusqu'au bas de la carte ou qu'il rencontre un bloc avec collision //
    if (this.getBottomCollision(this.playerBlocX, this.playerBlocY)) {
      this.gameService.playerY += 4
      this.jumpDown = 0
    }



    // gère le deplacement vers la droite : verifie que la touche fleche droite est enfoncé et appelle la fonction gérant la collision sur la droite du personnage//
    if ((this.gameService.move === MOVE_RIGHT) && this.gameService.xVelocity === MOVE_FORWARD && this.getRightCollision(this.playerBlocX, this.playerBlocY) && this.gameService.isOnFire === 0 && this.gameService.death !== ISDEAD) {

      this.gameService.playerScaleX = -1 // gere le reverse d'animation du personnage //
      this.gameService.playerX += 6 // deplace le personnage de 8px sur la droite //
      this.move = 1 // indique le mouvement en cours //
      this.jumpDown = 3




    }
    // gère le deplacement vers la gauche : verifie que la touche fleche gauche est enfoncee et appelle la fonction qui verifie la collision sur la gauche du personnage //
    if ((this.gameService.move === MOVE_LEFT) && this.gameService.playerX > 12 && this.gameService.xVelocity === MOVE_BACKWARD && this.getLeftCollision(this.playerBlocX, this.playerBlocY) && this.gameService.isOnFire === 0 && this.gameService.death !== ISDEAD) {

      this.gameService.playerScaleX = 1 // gere le reverse d'animation du personnage //

      this.gameService.playerX -= 6 // deplace le personnage de 8px sur la gauche//

      this.move = 1 // indique le mouvement en cours //
      this.jumpDown = 3

    }

    if ((this.gameService.dash === DASH) && this.gameService.playerScaleX === 1 && this.dashCount > 0) {


      this.gameService.xVelocity = 0
      this.gameService.playerX -= 40 // deplace le personnage de 8px sur la gauche//
      this.dashCount -= 1
      this.dash = new Date()
      this.jumpDown = 3

    }

    if ((this.gameService.dash === DASH) && this.gameService.playerScaleX === -1 && this.dashCount > 0) {

      this.gameService.xVelocity = 0
      this.gameService.playerX += 40 // deplace le personnage de 8px sur la droite //
      this.dashCount -= 1
      this.dash = new Date()
      this.jumpDown = 3

    }
    else if (this.gameService.dash !== DASH && this.dashCount === 0 && new Date().getTime() - this.dash.getTime() > 3000) {
      this.gameService.xVelocity = MOVE_FORWARD
      this.dashCount = 2

    }


    if (this.gameService.playerY > 650) {
      this.gameService.playerY = 0
      this.gameOver()
      this.gameMusic.pause()
      this.gameMusic.currentTime = 0

    }



    if (this.gameService.yVelocity === MOVE_UPWARD && this.gameService.playerY > 150 && this.getTopCollision(this.playerBlocX, this.playerBlocY) && (this.canJump === true)) {
      this.jump = 45 // gere l'animation de saut //
      this.jumpNumber -= 1 // retire un du nombre de saut disponible //
      this.jumpSound = new Audio()
      this.jumpSound.src = "assets/audio/jump.mp3"
      this.jumpSound.load()
      this.jumpSound.play()
      this.jumpDown = 1


      for (let i = 0; i <= 6; i++) { // boucle for decoupant le saut en 6 partie //
        if (this.jumpNumber === 0) { // si plus de saut disponible //
          this.canJump = false // ne peux plus sauter avant de toucher le sol //

        }

        if (this.getTopCollision(this.playerBlocX, this.playerBlocY)) { // check tout les 32px / tout les blocs si le bloc du dessus est traversable //
          this.gameService.playerY -= 25 // si le bloc est traversable le jump augmente de 32 px / 1 bloc //
          this.gameService.yVelocity = 0 // indication saut //
        }

      }

    }



    // si aucune touche enfonce, le perso sera immobile //
    else if((this.gameService.move !== MOVE_RIGHT) && (this.gameService.move !== MOVE_LEFT)) {
  if (this.getBottomCollision(this.playerBlocX, this.playerBlocY) === true) {
    this.move = 0
  }
  else if (this.getBottomCollision(this.playerBlocX, this.playerBlocY) === false) {
    this.jumpDown = 3
  }

}
this.gameService.gameDuration = new Date().getTime() - this.gameService.startTime.getTime()
  }

  

// fonction bloquant la camera sur le personnage //
cameraLock() {

  this.innerWidth = window.innerWidth // est egal a la moitie de l'ecran //
  window.scroll(this.gameService.playerX - ((this.innerWidth / 2) - 27), this.gameService.playerY) // bloque le scroll de page sur la position X du joueur - la moitie de l'ecran //
}


  /*   getTimePlayed() {
      if (this.canStopTime === true) {
        this.endTime = Math.floor((Date.now() - this.startTime) / 1000)
  
        this.canStopTime = false
  
      }
    }

   */
  // fonction faisant se deplacer les monstres //
  moveMonster() {
    for (let index in this.mapService.monsters) {
      const monster = this.mapService.monsters[index]

      if (monster.direction == MOVE_RIGHT) {
        monster.scaleX = -1
        monster.posX += 0.05;
        if (monster.initPosX + monster.amplitude < monster.posX) {
          monster.direction = MOVE_LEFT;
        }

      }
    
    else if (monster.direction == MOVE_LEFT) {
      monster.posX -= 0.05;
      monster.scaleX = 1
      if (monster.initPosX - monster.amplitude > monster.posX) {
        monster.direction = MOVE_RIGHT
      }
    }
  }
  }
// fonction faisant se deplacer les monstres //
moveOgr() {
  for (let index in this.mapService.ogrs) {
    const ogr = this.mapService.ogrs[index]

    if (ogr.direction == MOVE_RIGHT) {
      ogr.scaleX = -1
      ogr.posX += 0.02;
      if (ogr.initPosX + ogr.amplitude < ogr.posX) {
        ogr.direction = MOVE_LEFT
      }
    }
    else if (ogr.direction == MOVE_LEFT) {
      ogr.scaleX = 1;
      ogr.posX -= 0.02;
      if (ogr.initPosX - ogr.amplitude > ogr.posX) {
        ogr.direction = MOVE_RIGHT
      }
    }
  }
}

  moveSlim() {
    for (let index in this.mapService.slims) {
      const slim = this.mapService.slims[index]

      if (slim.direction == MOVE_RIGHT) {
        slim.scaleX = -1
        slim.posX += 0.01;
        if (slim.initPosX + slim.amplitude < slim.posX) {
          slim.direction = MOVE_LEFT
        }
      }
      else if (slim.direction == MOVE_LEFT) {
        slim.scaleX = 1;
        slim.posX -= 0.01;
        if (slim.initPosX - slim.amplitude > slim.posX) {
          slim.direction = MOVE_RIGHT
        }
      }
    }


  }

moveDruid() {
  for (let index in this.mapService.druids) {
    const druid = this.mapService.druids[index]

    if (druid.direction == MOVE_RIGHT) {
      druid.scaleX = -1
      druid.posX += 0.01;
      if (druid.initPosX + druid.amplitude < druid.posX) {
        druid.direction = MOVE_LEFT
      }
    }
    else if (druid.direction == MOVE_LEFT) {
      druid.scaleX = 1;
      druid.posX -= 0.01;
      if (druid.initPosX - druid.amplitude > druid.posX) {
        druid.direction = MOVE_RIGHT
      }
    }


  }
}
moveBoss() {
  for (let index in this.mapService.bosss) {
    const boss = this.mapService.bosss[index]

    if (boss.direction == MOVE_RIGHT) {
      boss.scaleX = -1
      boss.posX += 0.01;
      if (boss.initPosX + boss.amplitude < boss.posX) {
        boss.direction = MOVE_LEFT
      }
    }
    else if (boss.direction == MOVE_LEFT) {
      boss.scaleX = 1;
      boss.posX -= 0.01;
      if (boss.initPosX - boss.amplitude > boss.posX) {
        boss.direction = MOVE_RIGHT
      }
    }
  }
}

canDash() {

  if ((this.gameService.dash === DASH) && this.gameService.playerScaleX === 1 && new Date().getTime() - this.dash.getTime() > 50) {



    this.gameService.playerX -= 20 // deplace le personnage de 8px sur la gauche//
    this.dash = new Date();
    this.jumpDown = 3


  }

  if ((this.gameService.dash === DASH) && this.gameService.playerScaleX === -1 && new Date().getTime() - this.dash.getTime() > 50) {


    this.gameService.playerX += 20 // deplace le personnage de 8px sur la droite //
    this.dash = new Date();
    this.jumpDown = 3


  }
}
getMonsterCollision() {
  this.playerBlocY = Math.round(this.gameService.playerY / 32)
  this.playerBlocX = Math.round(this.gameService.playerX / 32)
  for (let i = 0; i < this.mapService.monsters.length; i++) {
    let posX = this.mapService.monsters[i].posX;
    let posY = this.mapService.monsters[i].posY;
    let differanceX = Math.abs(this.playerBlocX - posX);
    let differanceY = Math.abs(this.playerBlocY - posY)


      if (differanceX < 1 && differanceY < 1 && this.gameService.playerStat !== ISANINJA) {
        this.gameService.death = ISDEAD
        this.isDead = new Date()
      }

      if (differanceX < 3 && differanceY < 2 && this.gameService.playerStat === ISANINJA) {
    
        this.gameService.kick = SHOOTTHEMALL
        this.lastKick = new Date()
        this.mapService.monsters[i].isFlying = true
        

      }
      if(this.mapService.monsters[i].isFlying === true && this.mapService.monsters[i].scaleX === 1){

        this.mapService.monsters[i].posX += 0.5
        this.mapService.monsters[i].posY -= 0.2
        this.mapService.monsters[i].isRotating += 10
      }
      if(this.mapService.monsters[i].isFlying === true && this.mapService.monsters[i].scaleX === -1){

        this.mapService.monsters[i].posX -= 0.5
        this.mapService.monsters[i].posY -= 0.2
        this.mapService.monsters[i].isRotating += 10
      }

      if (this.gameService.death === ISDEAD && new Date().getTime() - this.isDead.getTime() > 850) {

      this.gameOver()
      this.gameMusic.pause()
      this.gameMusic.currentTime = 0


    }
  }
}

getOgrCollision() {
  this.playerBlocY = Math.round(this.gameService.playerY / 32)
  this.playerBlocX = Math.round(this.gameService.playerX / 32)
  for (let i = 0; i < this.mapService.ogrs.length; i++) {
    let posX = this.mapService.ogrs[i].posX;
    let posY = this.mapService.ogrs[i].posY;
    let differanceX = Math.abs(this.playerBlocX - posX);
    let differanceY = Math.abs(this.playerBlocY - posY)



      if (differanceX < 1 && differanceY < 1 && this.gameService.playerStat !== ISANINJA) {

        this.gameService.death = ISDEAD
        this.isDead = new Date()
      }

      if (differanceX < 3 && differanceY < 2 && this.gameService.playerStat === ISANINJA) {
     
        this.gameService.kick = SHOOTTHEMALL
        this.lastKick = new Date()
        this.mapService.ogrs[i].isFlying = true
        
      }
      if(this.mapService.ogrs[i].isFlying === true && this.mapService.ogrs[i].scaleX === 1){

        this.mapService.ogrs[i].posX += 0.5
        this.mapService.ogrs[i].posY -= 0.2
        this.mapService.ogrs[i].isRotating += 10
      }
      if(this.mapService.ogrs[i].isFlying === true && this.mapService.ogrs[i].scaleX === -1){

        this.mapService.ogrs[i].posX -= 0.5
        this.mapService.ogrs[i].posY -= 0.2
        this.mapService.ogrs[i].isRotating += 10
      }

 
      if (this.gameService.death === ISDEAD && new Date().getTime() - this.isDead.getTime() > 850) {

        this.gameOver()
        this.gameMusic.pause()
        this.gameMusic.currentTime = 0

      }
  }
}
  
  
getSlimCollision() {
  this.playerBlocY = Math.round(this.gameService.playerY / 32)
  this.playerBlocX = Math.round(this.gameService.playerX / 32)
  for (let i = 0; i < this.mapService.slims.length; i++) {
    let posX = this.mapService.slims[i].posX;
    let posY = this.mapService.slims[i].posY;
    let differanceX = Math.abs(this.playerBlocX - posX);
    let differanceY = Math.abs(this.playerBlocY - posY)


     if (differanceX < 1 && differanceY < 1 && this.gameService.playerStat !== ISANINJA) {
        this.gameService.death = ISDEAD
        this.isDead = new Date()
      }

      if (differanceX < 3 && differanceY < 1 && this.gameService.playerStat === ISANINJA) {

        this.gameService.kick = SHOOTTHEMALL
        this.lastKick = new Date()
        this.mapService.slims[i].isFlying = true

      }
      if(this.mapService.slims[i].isFlying === true && this.mapService.slims[i].scaleX === 1){

        this.mapService.slims[i].posX += 0.5
        this.mapService.slims[i].posY -= 0.2
        this.mapService.slims[i].isRotating += 10
      }
      if(this.mapService.slims[i].isFlying === true && this.mapService.slims[i].scaleX === -1){

        this.mapService.slims[i].posX -= 0.5
        this.mapService.slims[i].posY -= 0.2
        this.mapService.slims[i].isRotating += 10
      }


      if (this.gameService.death === ISDEAD && new Date().getTime() - this.isDead.getTime() > 850) {

        this.stop = true
        this.gameOver()
        this.gameMusic.pause()
        this.gameMusic.currentTime = 0
    }
  }
}

getDruidCollision() {
  this.playerBlocY = Math.round(this.gameService.playerY / 32)
  this.playerBlocX = Math.round(this.gameService.playerX / 32)
  for (let i = 0; i < this.mapService.druids.length; i++) {
    let posX = this.mapService.druids[i].posX;
    let posY = this.mapService.druids[i].posY;
    let differanceX = Math.abs(this.playerBlocX - posX);
    let differanceY = Math.abs(this.playerBlocY - posY)

if (differanceX < 1 && differanceY < 1 && this.gameService.playerStat !== ISANINJA) {

        this.gameService.death = ISDEAD
        this.isDead = new Date()
      }

      if (differanceX < 3 && differanceY < 2 && this.gameService.playerStat === ISANINJA) {

        this.gameService.kick = SHOOTTHEMALL
        this.lastKick = new Date()
        this.mapService.druids[i].isFlying = true

      }
      if(this.mapService.druids[i].isFlying === true && this.mapService.druids[i].scaleX === 1){

        this.mapService.druids[i].posX += 0.5
        this.mapService.druids[i].posY -= 0.2
        this.mapService.druids[i].isRotating += 10
      }

      if(this.mapService.druids[i].isFlying === true && this.mapService.druids[i].scaleX === -1){

        this.mapService.druids[i].posX -= 0.5
        this.mapService.druids[i].posY -= 0.2
        this.mapService.druids[i].isRotating += 10
      }

      if (this.gameService.death === ISDEAD && new Date().getTime() - this.isDead.getTime() > 850) {

        this.stop = true
        this.gameOver()
        this.gameMusic.pause()
        this.gameMusic.currentTime = 0
    }
  }
}


getBossCollision() {
  this.playerBlocY = Math.round(this.gameService.playerY / 32)
  this.playerBlocX = Math.round(this.gameService.playerX / 32)
  for (let i = 0; i < this.mapService.bosss.length; i++) {
    let posX = this.mapService.bosss[i].posX;
    let posY = this.mapService.bosss[i].posY;
    let differanceX = Math.abs(this.playerBlocX - posX);
    let differanceY = Math.abs(this.playerBlocY - posY)


    if (differanceX < 1 && differanceY < 1)  {
      this.gameService.death = ISDEAD
      this.isDead = new Date()
    }
    if (this.gameService.death === ISDEAD && new Date().getTime() - this.isDead.getTime() > 850) {

      this.stop = true
      this.gameOver()
      this.gameMusic.pause()
      this.gameMusic.currentTime = 0


    }
  }
}

monsterDeath() {



    for (let j = 0; j < this.gameService.fireBalls.length; j++) {
      this.fireBlocX = Math.round(this.gameService.fireBalls[j].posX / 32)
      this.fireBlocY = Math.round(this.gameService.fireBalls[j].posY / 32)

      for (let i = 0; i < this.mapService.monsters.length; i++) {// Pour chaque balle on compare sa position x y avec celle des monstres
        let posX = this.mapService.monsters[i].posX;
        let posY = this.mapService.monsters[i].posY;
        let diffX = Math.abs(this.fireBlocX - posX)
        let diffY = Math.abs(this.fireBlocY - posY)


        if (diffX < 0.5 && diffY < 1) { //Si la balle se trouve dans la même case que le monstre, le monstre et la balle disparaissent.
          //need death animation with date method here voir getMonsterCollision
          this.mapService.monsters.splice(i, 1)
          this.gameService.fireBalls.splice(j, 1)
          this.osDie = new Audio()
          this.osDie.src = "assets/audio/osMonsterDie.mp3"
          this.osDie.load()
          this.osDie.play()


        }
      }
    }
  }
  monsterDeathAxes() {

    for (let j = 0; j < this.gameService.axes.length; j++) {
      this.fireBlocX = Math.round(this.gameService.axes[j].posX / 32)
      this.fireBlocY = Math.round(this.gameService.axes[j].posY / 32)

      for (let i = 0; i < this.mapService.monsters.length; i++) {// Pour chaque balle on compare sa position x y avec celle des monstres
        let posX = this.mapService.monsters[i].posX;
        let posY = this.mapService.monsters[i].posY;
        let diffX = Math.abs(this.fireBlocX - posX)
        let diffY = Math.abs(this.fireBlocY - posY)


        if (diffX < 0.5 && diffY < 1) { //Si la balle se trouve dans la même case que le monstre, le monstre et la balle disparaissent.
          //need death animation with date method here voir getMonsterCollision
          this.mapService.monsters.splice(i, 1)
          this.gameService.axes.splice(j, 1)
          this.osDie = new Audio()
          this.osDie.src = "assets/audio/osMonsterDie.mp3"
          this.osDie.load()
          this.osDie.play()


        }

      }
    }
  }
  monsterDeathOgr() {

    for (let j = 0; j < this.gameService.fireBalls.length; j++) {
      this.fireBlocX = Math.round(this.gameService.fireBalls[j].posX / 32)
      this.fireBlocY = Math.round(this.gameService.fireBalls[j].posY / 32)

      for (let i = 0; i < this.mapService.ogrs.length; i++) {// Pour chaque balle on compare sa position x y avec celle des monstres
        let posX = this.mapService.ogrs[i].posX;
        let posY = this.mapService.ogrs[i].posY;
        let diffX = Math.abs(this.fireBlocX - posX)
        let diffY = Math.abs(this.fireBlocY - posY)


        if (diffX < 0.5 && diffY < 1) { //Si la balle se trouve dans la même case que le monstre, le monstre et la balle disparaissent.
          //need death animation with date method here voir getMonsterCollision
          this.mapService.ogrs.splice(i, 1)
          this.gameService.fireBalls.splice(j, 1)
          this.osDie = new Audio()
          this.osDie.src = "assets/audio/osMonsterDie.mp3"
          this.osDie.load()
          this.osDie.play()


        }
      }
      }
    }

  monsterDeathOgrAxes() {

    for (let j = 0; j < this.gameService.axes.length; j++) {
      this.fireBlocX = Math.round(this.gameService.axes[j].posX / 32)
      this.fireBlocY = Math.round(this.gameService.axes[j].posY / 32)

      for (let i = 0; i < this.mapService.ogrs.length; i++) {// Pour chaque balle on compare sa position x y avec celle des monstres
        let posX = this.mapService.ogrs[i].posX;
        let posY = this.mapService.ogrs[i].posY;
        let diffX = Math.abs(this.fireBlocX - posX)
        let diffY = Math.abs(this.fireBlocY - posY)


        if (diffX < 0.5 && diffY < 1) { //Si la balle se trouve dans la même case que le monstre, le monstre et la balle disparaissent.
          //need death animation with date method here voir getMonsterCollision
          this.mapService.ogrs.splice(i, 1)
          this.gameService.axes.splice(j, 1)
          this.osDie = new Audio()
          this.osDie.src = "assets/audio/osMonsterDie.mp3"
          this.osDie.load()
          this.osDie.play()


        }

      }
    }
  }
  monsterDeathSlim() {

    for (let j = 0; j < this.gameService.fireBalls.length; j++) {
      this.fireBlocX = Math.round(this.gameService.fireBalls[j].posX / 32)
      this.fireBlocY = Math.round(this.gameService.fireBalls[j].posY / 32)

      for (let i = 0; i < this.mapService.slims.length; i++) {// Pour chaque balle on compare sa position x y avec celle des monstres
        let posX = this.mapService.slims[i].posX;
        let posY = this.mapService.slims[i].posY;
        let diffX = Math.abs(this.fireBlocX - posX)
        let diffY = Math.abs(this.fireBlocY - posY)


        if (diffX < 0.5 && diffY < 1) { //Si la balle se trouve dans la même case que le monstre, le monstre et la balle disparaissent.
          //need death animation with date method here voir getMonsterCollision
          this.mapService.slims.splice(i, 1)
          this.gameService.fireBalls.splice(j, 1)
          this.osDie = new Audio()
          this.osDie.src = "assets/audio/osMonsterDie.mp3"
          this.osDie.load()
          this.osDie.play()


        }

      }
    }
  }
  monsterDeathSlimAxes() {

    for (let j = 0; j < this.gameService.axes.length; j++) {
      this.fireBlocX = Math.round(this.gameService.axes[j].posX / 32)
      this.fireBlocY = Math.round(this.gameService.axes[j].posY / 32)

      for (let i = 0; i < this.mapService.slims.length; i++) {// Pour chaque balle on compare sa position x y avec celle des monstres
        let posX = this.mapService.slims[i].posX;
        let posY = this.mapService.slims[i].posY;
        let diffX = Math.abs(this.fireBlocX - posX)
        let diffY = Math.abs(this.fireBlocY - posY)


        if (diffX < 0.5 && diffY < 1) { //Si la balle se trouve dans la même case que le monstre, le monstre et la balle disparaissent.
          //need death animation with date method here voir getMonsterCollision
          this.mapService.slims.splice(i, 1)
          this.gameService.axes.splice(j, 1)
          this.osDie = new Audio()
          this.osDie.src = "assets/audio/osMonsterDie.mp3"
          this.osDie.load()
          this.osDie.play()

        }

      }
    }
  }

  monsterDeathDruid() {

    for (let j = 0; j < this.gameService.fireBalls.length; j++) {
      this.fireBlocX = Math.round(this.gameService.fireBalls[j].posX / 32)
      this.fireBlocY = Math.round(this.gameService.fireBalls[j].posY / 32)

      for (let i = 0; i < this.mapService.druids.length; i++) {// Pour chaque balle on compare sa position x y avec celle des monstres
        let posX = this.mapService.druids[i].posX;
        let posY = this.mapService.druids[i].posY;
        let diffX = Math.abs(this.fireBlocX - posX)
        let diffY = Math.abs(this.fireBlocY - posY)


        if (diffX < 0.5 && diffY < 1) { //Si la balle se trouve dans la même case que le monstre, le monstre et la balle disparaissent.
          //need death animation with date method here voir getMonsterCollision
          this.mapService.druids.splice(i, 1)
          this.gameService.fireBalls.splice(j, 1)
          this.osDie = new Audio()
          this.osDie.src = "assets/audio/osMonsterDie.mp3"
          this.osDie.load()
          this.osDie.play()

        }

      }
    }
  }

  monsterDeathDruidAxes() {

    for (let j = 0; j < this.gameService.axes.length; j++) {
      this.fireBlocX = Math.round(this.gameService.axes[j].posX / 32)
      this.fireBlocY = Math.round(this.gameService.axes[j].posY / 32)

      for (let i = 0; i < this.mapService.druids.length; i++) {// Pour chaque balle on compare sa position x y avec celle des monstres
        let posX = this.mapService.druids[i].posX;
        let posY = this.mapService.druids[i].posY;
        let diffX = Math.abs(this.fireBlocX - posX)
        let diffY = Math.abs(this.fireBlocY - posY)


        if (diffX < 0.5 && diffY < 1) { //Si la balle se trouve dans la même case que le monstre, le monstre et la balle disparaissent.
          //need death animation with date method here voir getMonsterCollision
          this.mapService.druids.splice(i, 1)
          this.gameService.axes.splice(j, 1)
          this.osDie = new Audio()
          this.osDie.src = "assets/audio/osMonsterDie.mp3"
          this.osDie.load()
          this.osDie.play()

        }

      }
    }
  }



    monsterDeathBoss() {

          
      for (let j = 0; j < this.gameService.fireBalls.length; j++) {
        this.fireBlocX = Math.round(this.gameService.fireBalls[j].posX / 32)
        this.fireBlocY = Math.round(this.gameService.fireBalls[j].posY / 32)
  
        for (let i = 0; i < this.mapService.bosss.length; i++) {// Pour chaque balle on compare sa position x y avec celle des monstres
          let posX = this.mapService.bosss[i].posX;
          let posY = this.mapService.bosss[i].posY;
          let diffX = Math.abs(this.fireBlocX - posX)
          let diffY = Math.abs(this.fireBlocY - posY)
          
          if (diffX < 0.3 && diffY < 1.5 && this.mapService.bosss[i].pdv>0){

            this.mapService.bosss[i].pdv -= 1


          } 
  
          if (diffX < 0.3 && diffY < 1.5 && this.mapService.bosss[i].pdv===0) { //Si la balle se trouve dans la même case que le monstre, le monstre et la balle disparaissent.
            //need death animation with date method here voir getMonsterCollision
            this.mapService.bosss.splice(i, 1)
            this.gameService.fireBalls.splice(j, 1)
            this.osDie = new Audio()
            this.osDie.src = "assets/audio/osMonsterDie.mp3"
            this.osDie.load()
            this.osDie.play()
  
  
          }
  
        }
        }
      }


    isTheEnd(playerBlocX, playerBlocY) {
      this.playerBlocY = Math.round((this.gameService.playerY) / 32) // converti la position Y du personnage en pixel vers une valeur de l'array de la carte //
      this.playerBlocX = Math.round((this.gameService.playerX) / 32) // converti la position X du personnage en pixel vers une valeur de l'array de la carte  //
      this.cell = this.mapService.map[this.playerBlocY][this.playerBlocX] // Recupere les valeurs precedentes pour pouvoir recuper la donne dans l'array map ex:[5][12] et enleve 1 a la coordone Y pour checker le bloc au dessus de la position du joueur//
      

      if (this.mapTheme.blocs[this.cell].isEnd === true) { // cf dessus //
        // this.getTimePlayed()
        this.youWin()
        return true
      }
      else if (this.mapTheme.blocs[this.cell].isEnd === false) {
        return false
      }
    }
    isOnFire() {
      

      // Utile pour déterminer avec précision le sprite de la première balle selon l' orientation du personnage


      if (this.gameService.isOnFire === ISONFIRE && new Date().getTime() - this.lastFireballDate.getTime() > 250 && this.gameService.playerScaleX === -1) {
        this.lastPosX = this.gameService.playerX
        let fireBall = new Tir(this.gameService.playerX + 70, this.gameService.playerY + this.gameService.playerHeight / 2);
        this.gameService.fireBalls.push(fireBall)
        this.lastFireballDate = new Date();
        this.gunSound = new Audio();
        this.gunSound.src = "assets/audio/gun.mp3"
        this.gunSound.load()
        this.gunSound.play()
      }
       if (this.gameService.isOnFire === ISONFIRE && new Date().getTime() - this.lastFireballDate.getTime() > 250 && this.gameService.playerScaleX === 1) {
        this.lastPosX = this.gameService.playerX
        let fireBall = new Tir(this.gameService.playerX, this.gameService.playerY + this.gameService.playerHeight / 2);
        this.gameService.fireBalls.push(fireBall)
        this.lastFireballDate = new Date();
        this.gunSound = new Audio();
        this.gunSound.src = "assets/audio/gun.mp3"
        this.gunSound.load()
        this.gunSound.play()
      }

    if (this.gameService.playerScaleX === -1) {  //Comportement des balles lorsque le personnage est orienté vers la droite
      for (let i = 0; i < this.gameService.fireBalls.length; i++) {


        if (this.gameService.fireBalls[i].posX <= this.lastPosX + (this.innerWidth / 2) && this.gameService.fireBalls[i].posX >= this.gameService.playerX) {
          this.gameService.fireBalls[i].posX += 10
        }
        else {
          this.gameService.fireBalls.splice(i, 1)

        }

      }
    }
    else if (this.gameService.playerScaleX === 1) {  // Comportement des balles lorsque le personnage est orienté vers la gauche

      for (let i = 0; i < this.gameService.fireBalls.length; i++) {

        if (this.gameService.fireBalls[i].posX >= this.gameService.playerX - (this.innerWidth / 2) && this.gameService.fireBalls[i].posX <= this.gameService.playerX) {
          this.gameService.fireBalls[i].posX -= 10 // Tant que les balles ne dépassent pas une certaine distance, elles continuent leur trajet
          // Dès que la balle sort de l' écran elle disparaît
        }
        else {
          this.gameService.fireBalls.splice(i, 1)

        }
      }
    }

    //Permet de voir l'animation du personnage lorsqu' il rengaine
    if (this.gameService.isOnFire === FINTIR && this.timerEndFire === 0) {

      this.gameService.isOnFire = 0


    }

    if (this.timerEndFire <= 0) {
      this.timerEndFire = 5
    }

    if (this.gameService.isOnFire !== ISONFIRE && this.gameService.isOnFire === FINTIR) {
      this.timerEndFire -= 1
    }
  }


  isThrowingAxes() {
    this.lastPosX = this.gameService.playerX
    this.innerWidth = window.innerWidth


    // Utile pour déterminer avec précision le sprite de la première balle selon l' orientation du personnage


    if (this.gameService.isOnFire === THROWAXES && new Date().getTime() - this.lastAxesDate.getTime() > 500 && this.gameService.playerScaleX === -1) {
      this.lastPosX = this.gameService.playerX
      let axe = new Axes(this.gameService.playerX + 70, this.gameService.playerY - 30 + this.gameService.playerHeight / 2);
      this.gameService.axes.push(axe)
      this.lastAxesDate = new Date();
      this.axeSound = new Audio();
      this.axeSound.src = "assets/audio/axes.mp3"
      this.axeSound.load()
      this.axeSound.play()
    }

    if (this.gameService.isOnFire === THROWAXES && new Date().getTime() - this.lastAxesDate.getTime() > 500 && this.gameService.playerScaleX === 1) {
      this.lastPosX = this.gameService.playerX
      let axe = new Axes(this.gameService.playerX, this.gameService.playerY - 30 + this.gameService.playerHeight / 2);
      this.gameService.axes.push(axe)
      this.lastAxesDate = new Date();
      this.axeSound = new Audio();
      this.axeSound.src = "assets/audio/axes.mp3"
      this.axeSound.load()
      this.axeSound.play()
    }



    if (this.gameService.playerScaleX === -1) {  //Comportement des balles lorsque le personnage est orienté vers la droite
      for (let i = 0; i < this.gameService.axes.length; i++) {

        if (this.gameService.axes[i].posX <= this.lastPosX + (this.innerWidth / 2) && this.gameService.axes[i].posX >= this.gameService.playerX) {
          this.gameService.axes[i].posX += 10
        }
        else {
          this.gameService.axes.splice(i, 1)

        }

      }
    }
    else if (this.gameService.playerScaleX === 1) {  // Comportement des balles lorsque le personnage est orienté vers la gauche

      for (let i = 0; i < this.gameService.axes.length; i++) {

        if (this.gameService.axes[i].posX >= this.gameService.playerX - (this.innerWidth / 2) && this.gameService.axes[i].posX <= this.gameService.playerX) {
          this.gameService.axes[i].posX -= 10 // Tant que les balles ne dépassent pas une certaine distance, elles continuent leur trajet
          // Dès que la balle sort de l' écran elle disparaît
        }
        else {
          this.gameService.axes.splice(i, 1)

        }
      }
    }

    //Permet de voir l'animation du personnage lorsqu' il rengaine

  }

  isaNinja() {

    if (this.compt === 2) {
      this.goNinja = new Date()
      this.gameService.playerStat = ISANINJA
      this.compt = 0
    }
    if (new Date().getTime() - this.goNinja.getTime() > 10000 && this.gameService.playerStat === ISANINJA) {

      this.gameService.playerStat = 0
      this.gameService.kick = 0
    }

  }


  // fonction gerant la collision a droite //
  getRightCollision(playerBlocX, playerBlocY): boolean { // prend deux options : playerBlocY et playerBlocX // 
    this.playerBlocY = Math.round((this.gameService.playerY) / 32) // converti la position Y du personnage en pixel vers une valeur de l'array de la carte //
    this.playerBlocX = Math.round((this.gameService.playerX) / 32) // converti la position X du personnage en pixel une valeur de l'array de la carte  //
    this.cell = this.mapService.map[this.playerBlocY][this.playerBlocX + 1] // Recupere les valeurs precedentes pour pouvoir recuper la donne dans l'array map ex:[5][12] et rajoute 1 a la coordone X pour checker le bloc a droite de la position du joueur//

      if (this.mapTheme.blocs[this.cell].canGoThrough === false) { //check si la propriete canGoThrough de la donne de la carte est false//

        return false
      }
      else if (this.mapTheme.blocs[this.cell].canGoThrough === true) { //check si la propriete canGoThrough de la donne de la carte est false//
        return true
      }
    }

    // fonction gerant la collision en bas //
    getBottomCollision(playerBlocX, playerBlocY): boolean { // prend deux options : playerBlocY et playerBlocX // 
      this.playerBlocY = Math.round((this.gameService.playerY) / 32) // converti la position Y du personnage en pixel vers une valeur de l'array de la carte //
      this.playerBlocX = Math.round((this.gameService.playerX) / 32) // converti la position X du personnage en pixel une valeur de l'array de la carte  //
      this.cell = this.mapService.map[this.playerBlocY + 1][this.playerBlocX] // Recupere les valeurs precedentes pour pouvoir recuper la donne dans l'array map ex:[5][12] et rajoute 1 a la coordone Y pour checker le bloc au dessus de la position du joueur//

      if (this.mapTheme.blocs[this.cell].canGoThrough === false) { // cf dessus //

        return false
      }
      else if (this.mapTheme.blocs[this.cell].canGoThrough === true) { // cf dessus //
        return true
      }
    }

  getLeftCollision(playerBlocX, playerBlocY): boolean { // prend deux options : playerBlocY et playerBlocX // 
    this.playerBlocY = Math.round((this.gameService.playerY) / 32) // converti la position Y du personnage en pixel vers une valeur de l'array de la carte //
    this.playerBlocX = Math.round((this.gameService.playerX) / 32) // converti la position X du personnage en pixel  vers une valeur de l'array de la carte  //
    this.cell = this.mapService.map[this.playerBlocY][this.playerBlocX - 1] // Recupere les valeurs precedentes pour pouvoir recuper la donne dans l'array map ex:[5][12] et enleve 1 a la coordone X pour checker le bloc au gauche de la position du joueur//
    if (this.gameService.playerX > 19) {
      if (this.mapTheme.blocs[this.cell].canGoThrough === false) { // cf dessus //

        return false
      }
      else if (this.mapTheme.blocs[this.cell].canGoThrough === true) { // cf dessus //
        return true
      }
    }
  }


    getTopCollision(playerBlocX, playerBlocY) { // prend deux options : playerBlocY et playerBlocX // 
      this.playerBlocY = Math.round((this.gameService.playerY) / 32) // converti la position Y du personnage en pixel vers une valeur de l'array de la carte //
      this.playerBlocX = Math.round((this.gameService.playerX) / 32) // converti la position X du personnage en pixel vers une valeur de l'array de la carte  //
      this.cell = this.mapService.map[this.playerBlocY - 1][this.playerBlocX] // Recupere les valeurs precedentes pour pouvoir recuper la donne dans l'array map ex:[5][12] et enleve 1 a la coordone Y pour checker le bloc au dessus de la position du joueur//

      if (this.mapTheme.blocs[this.cell].canGoThrough === false) { // cf dessus //
        return false
      }
      else if (this.mapTheme.blocs[this.cell].canGoThrough === true) { // cf dessus //
        return true
      }
    }

    getPosPiece(){
      this.playerBlocY = Math.round(this.gameService.playerY / 32)
      this.playerBlocX = Math.round(this.gameService.playerX / 32)
      for (let i = 0; i < this.mapService.pieces.length; i++) {
        let posX = this.mapService.pieces[i].posX;
        let posY = this.mapService.pieces[i].posY;
        let differanceX = Math.abs(this.playerBlocX - posX);
        let differanceY = Math.abs(this.playerBlocY - posY)

        if (differanceX < 2 && differanceY < 2) {
          this.mapService.pieces.splice(i, 1);
          this.compt++

        }

      }
    }


stopKick(){
  if (new Date().getTime() - this.lastKick.getTime() > 750 && this.gameService.kick === SHOOTTHEMALL) {
    this.gameService.kick = 0
  }
}



  loop() {

    this.stopKick()
    this.isaNinja()
    this.getPosPiece()
    this.canMove() // appelle de fonction explique au dessus /  // 
    this.isOnFire()
    this.isThrowingAxes()
    this.getMonsterCollision()
    this.getOgrCollision()
    this.getSlimCollision()
    this.getDruidCollision()
    this.getBossCollision()
    this.monsterDeath()
    this.monsterDeathOgr()
    this.monsterDeathSlim()
    this.monsterDeathBoss()
    this.monsterDeathAxes()
    this.monsterDeathOgrAxes()
    this.monsterDeathSlimAxes()
    this.monsterDeathDruid()
    this.monsterDeathDruidAxes()
    this.moveMonster() // appelle de fonction explique au dessus //
    this.moveOgr() // appelle de fonction explique au dessus //
    this.moveSlim()
    this.moveDruid()
    this.moveBoss()
    this.cameraLock() // appelle de fonction explique au dessus //
    this.isTheEnd(this.playerBlocX, this.playerBlocY)
    this.pause() //Vérifie si la loop doit être arrếté, si false requestAnimationFrame 

  }


    

    start() {
      this.gameService.startTime = new Date()

      this.reInit() // Reinitialise toutes les variables
      this.loop() // lance le loop au lancement du jeu //
      //this.startTime = Date.now()
      this.playGameMusic()


    }
    gameOver() {
      this.stop = true
      this.route.navigate(['/Over'])
    }

    youWin() {
      this.route.navigate(['/win'])
    }

    reInit() {
      this.compt = 0
      this.gameService.move = 0
      this.gameService.xVelocity = 0
      this.gameService.yVelocity = 0
      this.gameService.playerX = 20
      this.gameService.playerY = 500
      this.gameService.playerScaleX = 0
      this.gameService.playerWidth = 53
      this.gameService.playerHeight = 60
      this.gameService.isOnFire = 0
      this.gameService.fireBalls = []
      this.gameService.death = 0

      this.mapService.monsters = [
        new OsMonster(24, 18.2),
        new OsMonster(39, 18.2),
        new OsMonster(70, 18.2),
        new OsMonster(120, 18.2),
      ]
      this.mapService.ogrs = [
        new OgrMonster(110, 8.2),
        new OgrMonster(45, 6.2),
        new OgrMonster(140, 18.2),
        new OgrMonster(10, 11.2),
      ]
      this.mapService.slims = [
        new SlimMonster(86, 18.8),
        new SlimMonster(180, 7),
        new SlimMonster(202, 3),
        new SlimMonster(204, 3),
        new SlimMonster(206, 3),

      ]
      this.mapService.druids = [
        new DruidMonster(50, 18),
        new DruidMonster(190, 4),
        new DruidMonster(80, 7),
        new DruidMonster(100, 7)
      ]
      this.mapService.bosss = [
      new BossMonster(205, 16),
    ]

    }




    pause() {
      if (!this.stop) {
        requestAnimationFrame(() => this.loop())
        this.stop = true;
      } else if (this.stop) {
        this.stop = false;

      }
    }


  }

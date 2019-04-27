import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { Tir } from './models/tir';

export const MOVE_RIGHT = 1
export const MOVE_LEFT = 2
export const MOVE_FORWARD = 3
export const MOVE_BACKWARD = 4
export const MOVE_UPWARD = 5
export const FALL = 6
export const ISONFIRE = 7
export const FINTIR = 8
export const ISDEAD = 9


@Injectable({
  providedIn: 'root'
})
export class GamestateService {

public move : any = 0
public xVelocity : any = 0
public yVelocity : any = 0
public playerX : any = 20
public playerY : any = this.playerY
public playerScaleX : any = 0
public playerWidth : number = 53
public playerHeight : number = 60
public isOnFire : any = 0
public fireBalls : Tir[] = []
public death : number = 0







  constructor(mapService: MapService) { }

  public reinit(){
    this.move  = 0
    this.xVelocity = 0
    this.yVelocity = 0
    this.playerX = 20
    this.playerY = 500
    this.playerScaleX = 0
    this.playerWidth = 53
    this.playerHeight = 60
 
  

  }

}

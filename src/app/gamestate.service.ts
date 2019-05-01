import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { Tir } from './models/tir';
import { Piece } from './models/piece';
import { Axes } from './models/axes';
import { BossAttacks } from './models/bossAttacks';

export const MOVE_RIGHT = 1
export const MOVE_LEFT = 2
export const MOVE_FORWARD = 3
export const MOVE_BACKWARD = 4
export const MOVE_UPWARD = 5
export const FALL = 6
export const ISONFIRE = 7
export const FINTIR = 8
export const ISDEAD = 9
export const DASH = 10
export const ISANINJA = 11
export const THROWAXES = 12
export const SHOOTTHEMALL = 13
export const ISATTACKING = 14


@Injectable({
  providedIn: 'root'
})
export class GamestateService {

public move : any = 0
public xVelocity : any = 0
public yVelocity : any = 0
public playerX : any 
public playerY : any = this.playerY
public playerScaleX : any = 0
public playerWidth : number = 53
public playerHeight : number = 60
public isOnFire : any = 0
public fireBalls : Tir[] = []
public death : number = 0
public dash : any = 0
public kick = 0
public startTime: Date
public gameDuration : number = 0;
public endTime: Date;
public piecePos: Piece[] = []
public playerStat = 0
public axes : Axes[] = []
public boss = 0
public bossAttacks : BossAttacks[]= []





  constructor() { }



}

import { Injectable } from '@angular/core';
import { GameloopService } from './gameloop.service';
import { MapService } from './map.service';

export const MOVE_RIGHT = 1
export const MOVE_LEFT = 2
export const MOVE_FORWARD = 3
export const MOVE_BACKWARD = 4
export const MOVE_UPWARD = 5
export const FALL = 6
export const CANGOTHROUGH = 7

@Injectable({
  providedIn: 'root'
})
export class GamestateService {

  public move : any = 0
  public xVelocity : any = 0
  public yVelocity : any = 0
  public playerX : any = 0
  public playerY : any = 0
  public playerScaleX : any = 0

  constructor(mapService: MapService) { }

}

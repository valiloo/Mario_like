import { Injectable } from '@angular/core';

export const MOVE_RIGHT = 1
export const MOVE_LEFT = 2
export const MOVE_FORWARD = 3
export const MOVE_BACKWARD = 4
export const MOVE_UPWARD = 5
export const FALL = 6

@Injectable({
  providedIn: 'root'
})
export class GamestateService {

  public move: any = 0
  public xVelocity: any = 0
  public yVelocity: any = 0



  constructor() { }


}

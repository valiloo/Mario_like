import { Injectable } from '@angular/core';
import { GameloopService } from './gameloop.service';

export const MOVE_RIGHT = 1
export const MOVE_LEFT = 2
export const MOVE_FORWARD = 3
export const MOVE_BACKWARD = 4

@Injectable({
  providedIn: 'root'
})
export class GamestateService {

public move : any = 0
public xVelocity : any = 0



  constructor() { }


}

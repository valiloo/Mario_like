import { Injectable } from '@angular/core';
import { GameloopService } from './gameloop.service';

export const MOVE_RIGHT = 1
export const MOVE_LEFT = 2

@Injectable({
  providedIn: 'root'
})
export class GamestateService {

move: number  = 0



  constructor() { }




}

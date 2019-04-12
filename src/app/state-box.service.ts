import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateBoxService {

player = {
  moveLeft : false
  moveRight: true
}

  constructor() { }
}

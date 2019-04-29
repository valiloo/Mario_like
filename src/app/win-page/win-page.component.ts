import { Component, OnInit } from '@angular/core';
import { GameloopService } from '../gameloop.service';

@Component({
  selector: 'app-win-page',
  templateUrl: './win-page.component.html',
  styleUrls: ['./win-page.component.scss']
})
export class WinPageComponent implements OnInit {

  endTime = this.gameloop.endTime
  constructor(private gameloop: GameloopService) {}
    
   



  ngOnInit() {
  }

}

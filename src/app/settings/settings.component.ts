import { Component, OnInit } from '@angular/core';
import { GameloopService } from '../gameloop.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public loop: GameloopService) { }



  ngOnInit() {

    this.loop.getSongMenu()
  }

}

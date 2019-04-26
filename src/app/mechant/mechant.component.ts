
import { Component, OnInit, HostListener,HostBinding, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { GamestateService, MOVE_RIGHT, MOVE_LEFT, MOVE_FORWARD, MOVE_BACKWARD, MOVE_UPWARD} from '../gamestate.service';
import { GameloopService } from '../gameloop.service';
import { MapService } from '../map.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@Component({
  selector: 'app-mechant',
  templateUrl: './mechant.component.html',
  styleUrls: ['./mechant.component.scss']
})
export class MechantComponent implements OnInit {

  constructor(public gameService: GamestateService, public loop: GameloopService) { }

  ngOnInit() {

   
  }

}

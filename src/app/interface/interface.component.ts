import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {
  time: number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => { if (this.time >= 0) this.time++; }, 1000);

  }

}

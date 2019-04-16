import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersnameComponent } from './playersname.component';

describe('PlayersnameComponent', () => {
  let component: PlayersnameComponent;
  let fixture: ComponentFixture<PlayersnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

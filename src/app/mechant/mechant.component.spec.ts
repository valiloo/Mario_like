import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechantComponent } from './mechant.component';

describe('MechantComponent', () => {
  let component: MechantComponent;
  let fixture: ComponentFixture<MechantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

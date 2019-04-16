import { TestBed } from '@angular/core/testing';

import { GamestateService } from './gamestate.service';

describe('GamestateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamestateService = TestBed.get(GamestateService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StateBoxService } from './state-box.service';

describe('StateBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateBoxService = TestBed.get(StateBoxService);
    expect(service).toBeTruthy();
  });
});

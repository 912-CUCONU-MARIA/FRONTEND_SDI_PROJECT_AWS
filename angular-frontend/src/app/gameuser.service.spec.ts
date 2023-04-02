import { TestBed } from '@angular/core/testing';

import { GameuserService } from './gameuser.service';

describe('GameuserService', () => {
  let service: GameuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

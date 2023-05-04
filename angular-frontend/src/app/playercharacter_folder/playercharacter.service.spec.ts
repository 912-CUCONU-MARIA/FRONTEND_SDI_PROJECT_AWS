import { TestBed } from '@angular/core/testing';

import { PlayercharacterService } from './playercharacter.service';

describe('PlayercharacterService', () => {
  let service: PlayercharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayercharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

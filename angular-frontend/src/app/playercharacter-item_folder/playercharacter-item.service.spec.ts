import { TestBed } from '@angular/core/testing';

import { PlayercharacterItemService } from './playercharacter-item.service';

describe('PlayercharacterItemService', () => {
  let service: PlayercharacterItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayercharacterItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

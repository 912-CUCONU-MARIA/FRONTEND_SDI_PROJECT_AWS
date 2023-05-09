import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStatisticplayercharacterComponent  } from './item-statisticplayercharacter.component';

describe('ItemStatisticplayercharacterComponent', () => {
  let component: ItemStatisticplayercharacterComponent;
  let fixture: ComponentFixture<ItemStatisticplayercharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemStatisticplayercharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemStatisticplayercharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

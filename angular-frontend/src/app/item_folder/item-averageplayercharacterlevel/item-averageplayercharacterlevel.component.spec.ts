import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAverageplayercharacterlevelComponent } from './item-averageplayercharacterlevel.component';

describe('ItemAverageplayercharacterlevelComponent', () => {
  let component: ItemAverageplayercharacterlevelComponent;
  let fixture: ComponentFixture<ItemAverageplayercharacterlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAverageplayercharacterlevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAverageplayercharacterlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameuserAverageplayercharacterlevelComponent } from './gameuser-averageplayercharacterlevel.component';

describe('GameuserAverageplayercharacterlevelComponent', () => {
  let component: GameuserAverageplayercharacterlevelComponent;
  let fixture: ComponentFixture<GameuserAverageplayercharacterlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameuserAverageplayercharacterlevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameuserAverageplayercharacterlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

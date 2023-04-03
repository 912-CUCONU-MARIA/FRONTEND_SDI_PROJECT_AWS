import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameuserDetailsComponent } from './gameuser-details.component';

describe('GameuserDetailsComponent', () => {
  let component: GameuserDetailsComponent;
  let fixture: ComponentFixture<GameuserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameuserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameuserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

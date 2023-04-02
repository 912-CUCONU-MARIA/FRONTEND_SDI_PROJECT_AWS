import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameuserListComponent } from './gameuser-list.component';

describe('GameuserListComponent', () => {
  let component: GameuserListComponent;
  let fixture: ComponentFixture<GameuserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameuserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameuserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

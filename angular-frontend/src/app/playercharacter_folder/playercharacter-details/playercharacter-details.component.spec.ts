import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayercharacterDetailsComponent } from './playercharacter-details.component';

describe('PlayercharacterDetailsComponent', () => {
  let component: PlayercharacterDetailsComponent;
  let fixture: ComponentFixture<PlayercharacterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayercharacterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayercharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

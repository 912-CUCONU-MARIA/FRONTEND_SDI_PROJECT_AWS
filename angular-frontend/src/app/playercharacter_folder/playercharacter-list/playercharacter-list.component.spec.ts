import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayercharacterListComponent } from './playercharacter-list.component';

describe('PlayercharacterListComponent', () => {
  let component: PlayercharacterListComponent;
  let fixture: ComponentFixture<PlayercharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayercharacterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayercharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

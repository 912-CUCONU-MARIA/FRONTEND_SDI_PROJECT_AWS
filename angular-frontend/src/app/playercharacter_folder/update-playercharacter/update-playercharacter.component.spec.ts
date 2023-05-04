import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlayercharacterComponent } from './update-playercharacter.component';

describe('UpdatePlayercharacterComponent', () => {
  let component: UpdatePlayercharacterComponent;
  let fixture: ComponentFixture<UpdatePlayercharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlayercharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePlayercharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

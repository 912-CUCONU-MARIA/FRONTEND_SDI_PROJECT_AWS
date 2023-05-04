import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlayercharacterComponent } from './create-playercharacter.component';

describe('CreatePlayercharacterComponent', () => {
  let component: CreatePlayercharacterComponent;
  let fixture: ComponentFixture<CreatePlayercharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlayercharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlayercharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

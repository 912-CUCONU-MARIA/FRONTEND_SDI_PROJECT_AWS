import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameuserComponent } from './create-gameuser.component';

describe('CreateGameuserComponent', () => {
  let component: CreateGameuserComponent;
  let fixture: ComponentFixture<CreateGameuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGameuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGameuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

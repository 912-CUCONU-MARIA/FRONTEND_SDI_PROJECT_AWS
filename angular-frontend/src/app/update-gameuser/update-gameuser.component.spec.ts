import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGameuserComponent } from './update-gameuser.component';

describe('UpdateGameuserComponent', () => {
  let component: UpdateGameuserComponent;
  let fixture: ComponentFixture<UpdateGameuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGameuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGameuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

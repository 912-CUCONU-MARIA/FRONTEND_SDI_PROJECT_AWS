import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemOfPlayercharacterComponent } from './update-item-of-playercharacter.component';

describe('UpdateItemOfPlayercharacterComponent', () => {
  let component: UpdateItemOfPlayercharacterComponent;
  let fixture: ComponentFixture<UpdateItemOfPlayercharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateItemOfPlayercharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateItemOfPlayercharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

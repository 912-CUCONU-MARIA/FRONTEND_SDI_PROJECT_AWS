import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemToPlayercharacterComponent } from './add-item-to-playercharacter.component';

describe('AddItemToPlayercharacterComponent', () => {
  let component: AddItemToPlayercharacterComponent;
  let fixture: ComponentFixture<AddItemToPlayercharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemToPlayercharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemToPlayercharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

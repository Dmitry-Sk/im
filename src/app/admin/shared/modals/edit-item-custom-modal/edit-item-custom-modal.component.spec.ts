import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemCustomModalComponent } from './edit-item-custom-modal.component';

describe('EditGroupCustomModalComponent', () => {
  let component: EditItemCustomModalComponent;
  let fixture: ComponentFixture<EditItemCustomModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditItemCustomModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemCustomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

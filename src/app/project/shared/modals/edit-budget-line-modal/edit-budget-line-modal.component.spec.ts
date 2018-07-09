import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBudgetLineModalComponent } from './edit-budget-line-modal.component';

describe('EditBudgetLineModalComponent', () => {
  let component: EditBudgetLineModalComponent;
  let fixture: ComponentFixture<EditBudgetLineModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBudgetLineModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBudgetLineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

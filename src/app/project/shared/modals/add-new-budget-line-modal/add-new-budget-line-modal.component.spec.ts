import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBudgetLineModalComponent } from './add-new-budget-line-modal.component';

describe('AddNewBudgetLineModalComponent', () => {
  let component: AddNewBudgetLineModalComponent;
  let fixture: ComponentFixture<AddNewBudgetLineModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewBudgetLineModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBudgetLineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

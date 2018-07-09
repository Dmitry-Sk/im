import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestScenarioModalComponent } from './edit-test-scenario-modal.component';

describe('EditTestScenarioModalComponent', () => {
  let component: EditTestScenarioModalComponent;
  let fixture: ComponentFixture<EditTestScenarioModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTestScenarioModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestScenarioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

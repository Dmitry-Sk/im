import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDangerModalComponent } from './confirmation-danger-modal.component';

describe('ConfirmationDangerModalComponent', () => {
  let component: ConfirmationDangerModalComponent;
  let fixture: ComponentFixture<ConfirmationDangerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationDangerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDangerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

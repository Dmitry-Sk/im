import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProjectManagerModalComponent } from './change-project-manager-modal.component';

describe('ChangeProjectManagerModalComponent', () => {
  let component: ChangeProjectManagerModalComponent;
  let fixture: ComponentFixture<ChangeProjectManagerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeProjectManagerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProjectManagerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

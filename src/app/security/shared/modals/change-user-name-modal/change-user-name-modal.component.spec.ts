import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUserNameModalComponent } from './change-user-name-modal.component';

describe('ChangeUserNameModalComponent', () => {
  let component: ChangeUserNameModalComponent;
  let fixture: ComponentFixture<ChangeUserNameModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeUserNameModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeUserNameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

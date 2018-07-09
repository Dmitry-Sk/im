import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefinedFieldsComponent } from './user-defined-fields.component';

describe('UserDefinedFieldsComponent', () => {
  let component: UserDefinedFieldsComponent;
  let fixture: ComponentFixture<UserDefinedFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDefinedFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDefinedFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

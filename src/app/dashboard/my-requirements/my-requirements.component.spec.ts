import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequirementsComponent } from './my-requirements.component';

describe('MyRequirementsComponent', () => {
  let component: MyRequirementsComponent;
  let fixture: ComponentFixture<MyRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

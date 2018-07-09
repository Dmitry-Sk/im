import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestScenariosComponent } from './my-test-scenarios.component';

describe('MyTestScenariosComponent', () => {
  let component: MyTestScenariosComponent;
  let fixture: ComponentFixture<MyTestScenariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTestScenariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTestScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

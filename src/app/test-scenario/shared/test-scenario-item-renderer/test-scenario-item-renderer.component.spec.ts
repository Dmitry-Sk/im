import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScenarioItemRendererComponent } from './test-scenario-item-renderer.component';

describe('TestScenarioItemRendererComponent', () => {
  let component: TestScenarioItemRendererComponent;
  let fixture: ComponentFixture<TestScenarioItemRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestScenarioItemRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScenarioItemRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

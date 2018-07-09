import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModeToggleComponent } from './view-mode-toggle.component';

describe('ViewModeToggleComponent', () => {
  let component: ViewModeToggleComponent;
  let fixture: ComponentFixture<ViewModeToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewModeToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

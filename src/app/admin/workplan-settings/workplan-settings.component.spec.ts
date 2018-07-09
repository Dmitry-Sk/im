import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkplanSettingsComponent } from './workplan-settings.component';

describe('AdminWorkplanSettingsComponent', () => {
  let component: AdminWorkplanSettingsComponent;
  let fixture: ComponentFixture<AdminWorkplanSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkplanSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkplanSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

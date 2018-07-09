import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardQuickOverviewComponent } from './dashboard-quick-overview.component';

describe('DashboardQuickOverviewComponent', () => {
  let component: DashboardQuickOverviewComponent;
  let fixture: ComponentFixture<DashboardQuickOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardQuickOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardQuickOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotStatusHistoryComponent } from './snapshot-status-history.component';

describe('SnapshotStatusHistoryComponent', () => {
  let component: SnapshotStatusHistoryComponent;
  let fixture: ComponentFixture<SnapshotStatusHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapshotStatusHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotStatusHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

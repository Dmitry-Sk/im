import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotCurrentStatusComponent } from './snapshot-current-status.component';

describe('SnapshotCurrentStatusComponent', () => {
  let component: SnapshotCurrentStatusComponent;
  let fixture: ComponentFixture<SnapshotCurrentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapshotCurrentStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotCurrentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotProjectInfoComponent } from './snapshot-project-info.component';

describe('SnapshotProjectInfoComponent', () => {
  let component: SnapshotProjectInfoComponent;
  let fixture: ComponentFixture<SnapshotProjectInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapshotProjectInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

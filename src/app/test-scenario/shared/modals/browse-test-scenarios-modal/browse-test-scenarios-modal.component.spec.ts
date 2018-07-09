import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTestScenariosModalComponent } from './browse-test-scenarios-modal.component';

describe('BrowseTestScenariosModalComponent', () => {
  let component: BrowseTestScenariosModalComponent;
  let fixture: ComponentFixture<BrowseTestScenariosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseTestScenariosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTestScenariosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

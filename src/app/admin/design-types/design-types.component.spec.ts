import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignTypesComponent } from './design-types.component';

describe('DesignTypesComponent', () => {
  let component: DesignTypesComponent;
  let fixture: ComponentFixture<DesignTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

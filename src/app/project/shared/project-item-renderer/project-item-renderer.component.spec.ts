import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemRendererComponent } from './project-item-renderer.component';

describe('ProjectItemRendererComponent', () => {
  let component: ProjectItemRendererComponent;
  let fixture: ComponentFixture<ProjectItemRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectItemRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

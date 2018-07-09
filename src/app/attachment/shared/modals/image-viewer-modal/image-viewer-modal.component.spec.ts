import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewerModalComponent } from './image-viewer-modal.component';

describe('ImageViewerModalComponent', () => {
  let component: ImageViewerModalComponent;
  let fixture: ComponentFixture<ImageViewerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageViewerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

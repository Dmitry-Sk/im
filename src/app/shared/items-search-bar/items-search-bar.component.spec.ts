import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSearchBarComponent } from './items-search-bar.component';

describe('ItemsSearchBarComponent', () => {
  let component: ItemsSearchBarComponent;
  let fixture: ComponentFixture<ItemsSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

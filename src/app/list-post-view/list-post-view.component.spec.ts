import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostViewComponent } from './list-post-view.component';

describe('ListPostViewComponent', () => {
  let component: ListPostViewComponent;
  let fixture: ComponentFixture<ListPostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

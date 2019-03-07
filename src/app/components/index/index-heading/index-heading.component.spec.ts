import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHeadingComponent } from './index-heading.component';

describe('IndexHeadingComponent', () => {
  let component: IndexHeadingComponent;
  let fixture: ComponentFixture<IndexHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

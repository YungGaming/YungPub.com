import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPubgTrackerComponent } from './index-pubg-tracker.component';

describe('IndexPubgTrackerComponent', () => {
  let component: IndexPubgTrackerComponent;
  let fixture: ComponentFixture<IndexPubgTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPubgTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPubgTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

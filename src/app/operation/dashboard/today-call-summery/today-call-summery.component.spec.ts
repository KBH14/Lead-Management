import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayCallSummeryComponent } from './today-call-summery.component';

describe('TodayCallSummeryComponent', () => {
  let component: TodayCallSummeryComponent;
  let fixture: ComponentFixture<TodayCallSummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayCallSummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayCallSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

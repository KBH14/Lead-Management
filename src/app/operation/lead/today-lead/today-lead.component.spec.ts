import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayLeadComponent } from './today-lead.component';

describe('TodayLeadComponent', () => {
  let component: TodayLeadComponent;
  let fixture: ComponentFixture<TodayLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

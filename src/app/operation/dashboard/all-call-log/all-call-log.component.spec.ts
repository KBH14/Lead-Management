import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCallLogComponent } from './all-call-log.component';

describe('AllCallLogComponent', () => {
  let component: AllCallLogComponent;
  let fixture: ComponentFixture<AllCallLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCallLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCallLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

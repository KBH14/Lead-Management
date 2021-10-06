import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCallLogComponent } from './success-call-log.component';

describe('SuccessCallLogComponent', () => {
  let component: SuccessCallLogComponent;
  let fixture: ComponentFixture<SuccessCallLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessCallLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessCallLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

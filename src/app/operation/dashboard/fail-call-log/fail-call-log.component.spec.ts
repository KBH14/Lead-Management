import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailCallLogComponent } from './fail-call-log.component';

describe('FailCallLogComponent', () => {
  let component: FailCallLogComponent;
  let fixture: ComponentFixture<FailCallLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailCallLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailCallLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

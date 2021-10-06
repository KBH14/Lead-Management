import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailCallsComponent } from './fail-calls.component';

describe('FailCallsComponent', () => {
  let component: FailCallsComponent;
  let fixture: ComponentFixture<FailCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

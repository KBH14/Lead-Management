import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadCallingComponent } from './lead-calling.component';

describe('LeadCallingComponent', () => {
  let component: LeadCallingComponent;
  let fixture: ComponentFixture<LeadCallingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadCallingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadCallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

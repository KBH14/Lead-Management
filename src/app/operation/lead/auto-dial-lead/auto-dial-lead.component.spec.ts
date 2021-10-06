import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDialLeadComponent } from './auto-dial-lead.component';

describe('AutoDialLeadComponent', () => {
  let component: AutoDialLeadComponent;
  let fixture: ComponentFixture<AutoDialLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoDialLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoDialLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

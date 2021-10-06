import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnattendedLeadComponent } from './unattended-lead.component';

describe('UnattendedLeadComponent', () => {
  let component: UnattendedLeadComponent;
  let fixture: ComponentFixture<UnattendedLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnattendedLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnattendedLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

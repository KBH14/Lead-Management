import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAutoDialLeadComponent } from './manage-auto-dial-lead.component';

describe('ManageAutoDialLeadComponent', () => {
  let component: ManageAutoDialLeadComponent;
  let fixture: ComponentFixture<ManageAutoDialLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAutoDialLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAutoDialLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

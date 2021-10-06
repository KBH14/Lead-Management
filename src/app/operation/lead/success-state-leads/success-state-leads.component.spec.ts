import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStateLeadsComponent } from './success-state-leads.component';

describe('SuccessStateLeadsComponent', () => {
  let component: SuccessStateLeadsComponent;
  let fixture: ComponentFixture<SuccessStateLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessStateLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStateLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

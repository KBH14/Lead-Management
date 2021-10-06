import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailStateLeadsComponent } from './fail-state-leads.component';

describe('FailStateLeadsComponent', () => {
  let component: FailStateLeadsComponent;
  let fixture: ComponentFixture<FailStateLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailStateLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailStateLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

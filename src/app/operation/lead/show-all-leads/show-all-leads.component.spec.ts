import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllLeadsComponent } from './show-all-leads.component';

describe('ShowAllLeadsComponent', () => {
  let component: ShowAllLeadsComponent;
  let fixture: ComponentFixture<ShowAllLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

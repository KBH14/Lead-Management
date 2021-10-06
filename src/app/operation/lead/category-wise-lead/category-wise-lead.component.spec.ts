import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWiseLeadComponent } from './category-wise-lead.component';

describe('CategoryWiseLeadComponent', () => {
  let component: CategoryWiseLeadComponent;
  let fixture: ComponentFixture<CategoryWiseLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryWiseLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWiseLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

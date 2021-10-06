import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessFollowsUpComponent } from './success-follows-up.component';

describe('SuccessFollowsUpComponent', () => {
  let component: SuccessFollowsUpComponent;
  let fixture: ComponentFixture<SuccessFollowsUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessFollowsUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessFollowsUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

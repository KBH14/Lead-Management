import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueTodayComponent } from './due-today.component';

describe('DueTodayComponent', () => {
  let component: DueTodayComponent;
  let fixture: ComponentFixture<DueTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

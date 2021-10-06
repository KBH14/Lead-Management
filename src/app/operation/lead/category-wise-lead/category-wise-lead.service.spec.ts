import { TestBed } from '@angular/core/testing';

import { CategoryWiseLeadService } from './category-wise-lead.service';

describe('CategoryWiseLeadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryWiseLeadService = TestBed.get(CategoryWiseLeadService);
    expect(service).toBeTruthy();
  });
});

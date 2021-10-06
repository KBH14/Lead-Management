import { TestBed } from '@angular/core/testing';

import { ShowAllLeadsService } from './show-all-leads.service';

describe('ShowAllLeadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowAllLeadsService = TestBed.get(ShowAllLeadsService);
    expect(service).toBeTruthy();
  });
});

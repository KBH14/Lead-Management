import { TestBed } from '@angular/core/testing';

import { AutoDialLeadService } from './auto-dial-lead.service';

describe('AutoDialLeadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoDialLeadService = TestBed.get(AutoDialLeadService);
    expect(service).toBeTruthy();
  });
});

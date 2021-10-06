import { TestBed } from '@angular/core/testing';

import { EmailLogService } from './email-log.service';

describe('EmailLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailLogService = TestBed.get(EmailLogService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { JobResolveService } from './job-resolve.service';

describe('JobResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobResolveService = TestBed.get(JobResolveService);
    expect(service).toBeTruthy();
  });
});

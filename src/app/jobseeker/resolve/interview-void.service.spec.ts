import { TestBed } from '@angular/core/testing';

import { InterviewVoidService } from './interview-void.service';

describe('InterviewVoidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterviewVoidService = TestBed.get(InterviewVoidService);
    expect(service).toBeTruthy();
  });
});

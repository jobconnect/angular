import { TestBed } from '@angular/core/testing';

import { InterviewEtiquetteService } from './interview-etiquette.service';

describe('InterviewEtiquetteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterviewEtiquetteService = TestBed.get(InterviewEtiquetteService);
    expect(service).toBeTruthy();
  });
});

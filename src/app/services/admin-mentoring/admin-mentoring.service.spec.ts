import { TestBed, inject } from '@angular/core/testing';

import { AdminMentoringService } from './admin-mentoring.service';

describe('AdminMentoringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminMentoringService]
    });
  });

  it('should be created', inject([AdminMentoringService], (service: AdminMentoringService) => {
    expect(service).toBeTruthy();
  }));
});

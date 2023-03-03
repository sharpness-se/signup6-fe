import { TestBed } from '@angular/core/testing';

import { ParticipationFormService } from './participation-form.service';

describe('ParticipationFormService', () => {
  let service: ParticipationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

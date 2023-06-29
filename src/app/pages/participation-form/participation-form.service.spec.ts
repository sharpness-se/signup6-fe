import {TestBed} from '@angular/core/testing';

import {ParticipationFormService} from './participation-form.service';
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MockProvider} from "ng-mocks";

xdescribe('ParticipationFormService', () => {
  let service: ParticipationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockProvider(ApiService),
        MockProvider(Router),
        MockProvider(MatSnackBar)
      ]
    });
    service = TestBed.inject(ParticipationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

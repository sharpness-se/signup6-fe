import { TestBed } from '@angular/core/testing';

import { GroupService } from './group.service';
import {MockProvider} from "ng-mocks";
import {ApiService} from "../../services/api.service";

describe('GroupService', () => {
  let service: GroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GroupService,
        MockProvider(ApiService)
      ]
    });
    service = TestBed.inject(GroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

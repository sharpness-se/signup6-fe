import { TestBed } from '@angular/core/testing';

import { EventListService } from './event-list.service';

xdescribe('EventListService', () => {
  let service: EventListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

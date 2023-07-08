import { TestBed } from '@angular/core/testing';

import { ChoosePlaceService } from './choose-place.service';

describe('ChoosePlaceService', () => {
  let service: ChoosePlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoosePlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

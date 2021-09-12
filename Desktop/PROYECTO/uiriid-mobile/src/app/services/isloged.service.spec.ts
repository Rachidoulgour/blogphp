import { TestBed } from '@angular/core/testing';

import { IslogedService } from './isloged.service';

describe('IslogedService', () => {
  let service: IslogedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IslogedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

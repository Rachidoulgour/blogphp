import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticGuard } from './authentic.guard';

describe('AuthenticGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticGuard]
    });
  });

  it('should ...', inject([AuthenticGuard], (guard: AuthenticGuard) => {
    expect(guard).toBeTruthy();
  }));
});

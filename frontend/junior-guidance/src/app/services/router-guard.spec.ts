import { TestBed } from '@angular/core/testing';

import { RouterGuard } from './router-guard';

describe('RouterGuard', () => {
  let service: RouterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

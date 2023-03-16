import { TestBed } from '@angular/core/testing';

import { EmployDetailsService } from './employ-details.service';

describe('EmployDetailsService', () => {
  let service: EmployDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

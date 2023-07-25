import { TestBed } from '@angular/core/testing';

import { AccountservicesService } from './accountservices.service';

describe('AccountservicesService', () => {
  let service: AccountservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LoginpassengerService } from './loginpassenger.service';

describe('LoginpassengerService', () => {
  let service: LoginpassengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginpassengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

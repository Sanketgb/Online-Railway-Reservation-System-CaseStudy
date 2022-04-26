import { TestBed } from '@angular/core/testing';

import { RegisterpassengerService } from './registerpassenger.service';

describe('RegisterpassengerService', () => {
  let service: RegisterpassengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterpassengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

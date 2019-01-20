/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginCheckService } from './login-check.service';

describe('LoginCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginCheckService]
    });
  });

  it('should ...', inject([LoginCheckService], (service: LoginCheckService) => {
    expect(service).toBeTruthy();
  }));
});

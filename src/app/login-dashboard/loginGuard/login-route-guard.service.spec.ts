/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginRouteGuardService } from './login-route-guard.service';

describe('LoginRouteGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRouteGuardService]
    });
  });

  it('should ...', inject([LoginRouteGuardService], (service: LoginRouteGuardService) => {
    expect(service).toBeTruthy();
  }));
});

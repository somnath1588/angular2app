/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardGuardService } from './dashboard-guard.service';

describe('DashboardGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardGuardService]
    });
  });

  it('should ...', inject([DashboardGuardService], (service: DashboardGuardService) => {
    expect(service).toBeTruthy();
  }));
});

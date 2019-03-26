import { TestBed } from '@angular/core/testing';

import { AngularTiltService } from './angular-tilt.service';

describe('AngularTiltService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularTiltService = TestBed.get(AngularTiltService);
    expect(service).toBeTruthy();
  });
});

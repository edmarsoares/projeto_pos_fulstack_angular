import { TestBed } from '@angular/core/testing';

import { MedicoResolveService } from './medico-resolve.service';

describe('MedicoResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicoResolveService = TestBed.get(MedicoResolveService);
    expect(service).toBeTruthy();
  });
});

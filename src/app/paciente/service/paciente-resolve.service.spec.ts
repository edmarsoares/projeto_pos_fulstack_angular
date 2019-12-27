import { TestBed } from '@angular/core/testing';

import { PacienteResolveService } from './paciente-resolve.service';

describe('PacienteResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacienteResolveService = TestBed.get(PacienteResolveService);
    expect(service).toBeTruthy();
  });
});

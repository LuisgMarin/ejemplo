import { TestBed } from '@angular/core/testing';

import { FutbolNombreEstudiantesService } from './futbol-nombre-estudiantes.service';

describe('FutbolNombreEstudiantesService', () => {
  let service: FutbolNombreEstudiantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FutbolNombreEstudiantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

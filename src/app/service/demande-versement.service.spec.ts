import { TestBed } from '@angular/core/testing';

import { DemandeVersementService } from './demande-versement.service';

describe('DemandeVersementService', () => {
  let service: DemandeVersementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeVersementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

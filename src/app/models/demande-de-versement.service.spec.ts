import { TestBed } from '@angular/core/testing';
import { DemandeDeVersementService } from './service/demande-de-versement.service';


describe('DemandeDeVersementService', () => {
  let service: DemandeDeVersementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeDeVersementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

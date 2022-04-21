import { TestBed } from '@angular/core/testing';

import { SuiviDocumentService } from './suivi-document.service';

describe('SuiviDocumentService', () => {
  let service: SuiviDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuiviDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

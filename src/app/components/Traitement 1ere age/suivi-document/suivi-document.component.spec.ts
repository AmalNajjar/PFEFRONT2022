import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDocumentComponent } from './suivi-document.component';

describe('SuiviDocumentComponent', () => {
  let component: SuiviDocumentComponent;
  let fixture: ComponentFixture<SuiviDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

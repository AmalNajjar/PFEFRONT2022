import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDeVersementComponent } from './demande-de-versement.component';

describe('DemandeDeVersementComponent', () => {
  let component: DemandeDeVersementComponent;
  let fixture: ComponentFixture<DemandeDeVersementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeDeVersementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDeVersementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

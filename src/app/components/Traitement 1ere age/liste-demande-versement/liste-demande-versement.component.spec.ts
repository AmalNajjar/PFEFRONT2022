import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeVersementComponent } from './liste-demande-versement.component';

describe('ListeDemandeVersementComponent', () => {
  let component: ListeDemandeVersementComponent;
  let fixture: ComponentFixture<ListeDemandeVersementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandeVersementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandeVersementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

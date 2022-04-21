import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDeRenseignementComponent } from './fiche-de-renseignement.component';

describe('FicheDeRenseignementComponent', () => {
  let component: FicheDeRenseignementComponent;
  let fixture: ComponentFixture<FicheDeRenseignementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheDeRenseignementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDeRenseignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

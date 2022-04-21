import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionParametragesComponent } from './gestion-parametrages.component';

describe('GestionParametragesComponent', () => {
  let component: GestionParametragesComponent;
  let fixture: ComponentFixture<GestionParametragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionParametragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionParametragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

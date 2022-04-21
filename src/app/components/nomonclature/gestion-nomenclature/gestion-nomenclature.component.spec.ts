import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionNomenclatureComponent } from './gestion-nomenclature.component';

describe('GestionNomenclatureComponent', () => {
  let component: GestionNomenclatureComponent;
  let fixture: ComponentFixture<GestionNomenclatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionNomenclatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeNomenclatureComponent } from './cree-nomenclature.component';

describe('CreeNomenclatureComponent', () => {
  let component: CreeNomenclatureComponent;
  let fixture: ComponentFixture<CreeNomenclatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeNomenclatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

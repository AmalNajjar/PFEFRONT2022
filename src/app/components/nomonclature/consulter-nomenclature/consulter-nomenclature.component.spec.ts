import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterNomenclatureComponent } from './consulter-nomenclature.component';

describe('ConsulterNomenclatureComponent', () => {
  let component: ConsulterNomenclatureComponent;
  let fixture: ComponentFixture<ConsulterNomenclatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterNomenclatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

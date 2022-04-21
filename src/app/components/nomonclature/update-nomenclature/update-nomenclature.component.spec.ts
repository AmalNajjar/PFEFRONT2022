import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNomenclatureComponent } from './update-nomenclature.component';

describe('UpdateNomenclatureComponent', () => {
  let component: UpdateNomenclatureComponent;
  let fixture: ComponentFixture<UpdateNomenclatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNomenclatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

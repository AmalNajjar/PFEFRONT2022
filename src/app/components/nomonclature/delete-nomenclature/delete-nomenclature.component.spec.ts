import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNomenclatureComponent } from './delete-nomenclature.component';

describe('DeleteNomenclatureComponent', () => {
  let component: DeleteNomenclatureComponent;
  let fixture: ComponentFixture<DeleteNomenclatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNomenclatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

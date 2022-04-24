import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireDocument2emeageComponent } from './inventaire-document2emeage.component';

describe('InventaireDocument2emeageComponent', () => {
  let component: InventaireDocument2emeageComponent;
  let fixture: ComponentFixture<InventaireDocument2emeageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventaireDocument2emeageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaireDocument2emeageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

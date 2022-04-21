import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionSortieDocComponent } from './inscription-sortie-doc.component';

describe('InscriptionSortieDocComponent', () => {
  let component: InscriptionSortieDocComponent;
  let fixture: ComponentFixture<InscriptionSortieDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionSortieDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionSortieDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

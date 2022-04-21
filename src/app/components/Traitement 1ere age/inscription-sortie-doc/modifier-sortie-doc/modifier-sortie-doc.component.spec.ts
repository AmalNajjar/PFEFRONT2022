import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSortieDocComponent } from './modifier-sortie-doc.component';

describe('ModifierSortieDocComponent', () => {
  let component: ModifierSortieDocComponent;
  let fixture: ComponentFixture<ModifierSortieDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSortieDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSortieDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

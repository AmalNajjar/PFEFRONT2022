import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteDateDestructionComponent } from './ajoute-date-destruction.component';

describe('AjouteDateDestructionComponent', () => {
  let component: AjouteDateDestructionComponent;
  let fixture: ComponentFixture<AjouteDateDestructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteDateDestructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteDateDestructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

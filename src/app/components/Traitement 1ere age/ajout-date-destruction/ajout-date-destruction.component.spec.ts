import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDateDestructionComponent } from './ajout-date-destruction.component';

describe('AjoutDateDestructionComponent', () => {
  let component: AjoutDateDestructionComponent;
  let fixture: ComponentFixture<AjoutDateDestructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDateDestructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDateDestructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

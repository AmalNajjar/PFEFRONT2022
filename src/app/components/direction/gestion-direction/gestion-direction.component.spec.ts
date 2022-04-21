import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDirectionComponent } from './gestion-direction.component';

describe('GestionDirectionComponent', () => {
  let component: GestionDirectionComponent;
  let fixture: ComponentFixture<GestionDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

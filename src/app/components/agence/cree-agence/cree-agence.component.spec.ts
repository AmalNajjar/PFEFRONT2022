import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeAgenceComponent } from './cree-agence.component';

describe('CreeAgenceComponent', () => {
  let component: CreeAgenceComponent;
  let fixture: ComponentFixture<CreeAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

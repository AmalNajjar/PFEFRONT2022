import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructionDocumentComponent } from './destruction-document.component';

describe('DestructionDocumentComponent', () => {
  let component: DestructionDocumentComponent;
  let fixture: ComponentFixture<DestructionDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestructionDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructionDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

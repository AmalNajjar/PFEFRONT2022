import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeDocumentComponent } from './cree-document.component';

describe('CreeDocumentComponent', () => {
  let component: CreeDocumentComponent;
  let fixture: ComponentFixture<CreeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

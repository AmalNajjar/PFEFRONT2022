import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriDocumentComponent } from './tri-document.component';

describe('TriDocumentComponent', () => {
  let component: TriDocumentComponent;
  let fixture: ComponentFixture<TriDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

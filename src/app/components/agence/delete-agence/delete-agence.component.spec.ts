import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAgenceComponent } from './delete-agence.component';

describe('DeleteAgenceComponent', () => {
  let component: DeleteAgenceComponent;
  let fixture: ComponentFixture<DeleteAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

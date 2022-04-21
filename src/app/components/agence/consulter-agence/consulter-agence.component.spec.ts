import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterAgenceComponent } from './consulter-agence.component';

describe('ConsulterAgenceComponent', () => {
  let component: ConsulterAgenceComponent;
  let fixture: ComponentFixture<ConsulterAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

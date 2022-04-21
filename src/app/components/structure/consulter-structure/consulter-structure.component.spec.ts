import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterStructureComponent } from './consulter-structure.component';

describe('ConsulterStructureComponent', () => {
  let component: ConsulterStructureComponent;
  let fixture: ComponentFixture<ConsulterStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

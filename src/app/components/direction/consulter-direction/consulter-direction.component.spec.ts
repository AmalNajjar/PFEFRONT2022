import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterDirectionComponent } from './consulter-direction.component';

describe('ConsulterDirectionComponent', () => {
  let component: ConsulterDirectionComponent;
  let fixture: ComponentFixture<ConsulterDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

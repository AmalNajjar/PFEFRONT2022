import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreedirectionComponent } from './creedirection.component';

describe('CreedirectionComponent', () => {
  let component: CreedirectionComponent;
  let fixture: ComponentFixture<CreedirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreedirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

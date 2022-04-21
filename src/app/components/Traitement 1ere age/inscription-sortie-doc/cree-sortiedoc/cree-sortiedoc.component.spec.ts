import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeSortiedocComponent } from './cree-sortiedoc.component';

describe('CreeSortiedocComponent', () => {
  let component: CreeSortiedocComponent;
  let fixture: ComponentFixture<CreeSortiedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeSortiedocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeSortiedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

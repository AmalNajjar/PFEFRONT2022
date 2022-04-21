import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerStructureComponent } from './creer-structure.component';

describe('CreerStructureComponent', () => {
  let component: CreerStructureComponent;
  let fixture: ComponentFixture<CreerStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

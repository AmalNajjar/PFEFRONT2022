import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterSortieDocComponent } from './consulter-sortie-doc.component';

describe('ConsulterSortieDocComponent', () => {
  let component: ConsulterSortieDocComponent;
  let fixture: ComponentFixture<ConsulterSortieDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterSortieDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterSortieDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTypeAbsenceComponent } from './liste-type-absence.component';

describe('ListeTypeAbsenceComponent', () => {
  let component: ListeTypeAbsenceComponent;
  let fixture: ComponentFixture<ListeTypeAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTypeAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTypeAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

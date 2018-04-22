import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTypeAbsenceComponent } from './detail-type-absence.component';

describe('DetailTypeAbsenceComponent', () => {
  let component: DetailTypeAbsenceComponent;
  let fixture: ComponentFixture<DetailTypeAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTypeAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTypeAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

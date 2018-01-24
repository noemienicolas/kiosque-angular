import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMotifCompteurComponent } from './liste-motif-compteur.component';

describe('ListeMotifCompteurComponent', () => {
  let component: ListeMotifCompteurComponent;
  let fixture: ComponentFixture<ListeMotifCompteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMotifCompteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMotifCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

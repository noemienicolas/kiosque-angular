import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSoldeAgentComponent } from './ajout-solde-agent.component';

describe('AjoutSoldeAgentComponent', () => {
  let component: AjoutSoldeAgentComponent;
  let fixture: ComponentFixture<AjoutSoldeAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutSoldeAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSoldeAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

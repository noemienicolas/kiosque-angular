import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldeAgentComponent } from './solde-agent.component';

describe('SoldeAgentComponent', () => {
  let component: SoldeAgentComponent;
  let fixture: ComponentFixture<SoldeAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldeAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldeAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

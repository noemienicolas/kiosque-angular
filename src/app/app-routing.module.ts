import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListeTypeAbsenceComponent} from './liste-type-absence/liste-type-absence.component';
import {SoldeAgentComponent} from './solde-agent/solde-agent.component';




const routes: Routes = [
  {path: 'liste-type-absence', component: ListeTypeAbsenceComponent},
  {path: 'solde-agent', component: SoldeAgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

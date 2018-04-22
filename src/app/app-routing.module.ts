import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListeTypeAbsenceComponent} from './liste-type-absence/liste-type-absence.component';
import {SoldeAgentComponent} from './solde-agent/solde-agent.component';
import {DetailTypeAbsenceComponent} from './detail-type-absence/detail-type-absence.component';




const routes: Routes = [
  {path: '', redirectTo: 'solde-agent', pathMatch: 'full'},
  {path: 'liste-type-absence', component: ListeTypeAbsenceComponent},
  {path: 'solde-agent', component: SoldeAgentComponent},
  {path: 'test/:id', component: DetailTypeAbsenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

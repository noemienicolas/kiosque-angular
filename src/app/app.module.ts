import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListeTypeAbsenceComponent } from './liste-type-absence/liste-type-absence.component';
import { SoldeAgentComponent } from './solde-agent/solde-agent.component';
import { AjoutSoldeAgentComponent } from './ajout-solde-agent/ajout-solde-agent.component';
import { ListeMotifCompteurComponent } from './liste-motif-compteur/liste-motif-compteur.component';
import { DetailTypeAbsenceComponent } from './detail-type-absence/detail-type-absence.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeTypeAbsenceComponent,
    SoldeAgentComponent,
    AjoutSoldeAgentComponent,
    ListeMotifCompteurComponent,
    DetailTypeAbsenceComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

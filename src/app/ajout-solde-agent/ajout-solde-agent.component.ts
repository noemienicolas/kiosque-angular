import {Component, OnInit, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CompteurDto} from '../class/CompteurDto';
import { MotifCompteurDto } from '../class/MotifCompteurDto';

@Component({
  selector: 'app-ajout-solde-agent',
  templateUrl: './ajout-solde-agent.component.html',
  styleUrls: ['./ajout-solde-agent.component.css']
})
export class AjoutSoldeAgentComponent implements OnInit {

  @Input() typeAbsence: number;
  dto: CompteurDto = new CompteurDto();

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  changeValueMotifCompteur (selection : MotifCompteurDto) {
    this.dto.motifCompteurDto.idMotifCompteur = selection.idMotifCompteur;
  }

  private postChange() {
    const duree = this.dto.dureeAAjouter;
    if (this.dto.isRetrait) {
      this.dto.dureeARetrancher = duree;
      this.dto.dureeAAjouter = null;
    } else {
      this.dto.dureeARetrancher = null;
      this.dto.dureeAAjouter = duree;
    }
    //    on construit le DTO pour le POST
    if (this.typeAbsence != null) {
      this.dto.idAgent = 9005138;
      let url: string = environment.urlAbsWS;
      if (this.typeAbsence == 2) {
        // respo comp
        url += 'reposcomps/addManual?idAgent='+this.dto.idAgent;
      } else if (this.typeAbsence == 1) {
        // congés annuels
        url += 'congeannuel/addManual?idAgent='+this.dto.idAgent;
      }

      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      const options = {
        headers: headers
      };

      return this._http.post<CompteurDto>(url, this.dto, options)
        .subscribe(data => {
          //          this.soldeAgent = data;
          console.log('valide');
        }, err => {
          console.log(err.status + ' : '+err.error.errors); //on recup la liste des messages d'erreur
        });
    }
    //on remet valeur pour binding
    this.dto.dureeARetrancher = duree;
    this.dto.dureeAAjouter = duree;
  }

}

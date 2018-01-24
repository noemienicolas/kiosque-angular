import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import { MotifCompteurDto } from '../class/MotifCompteurDto';

@Component({
  selector: 'app-liste-motif-compteur',
  templateUrl: './liste-motif-compteur.component.html',
  styleUrls: ['./liste-motif-compteur.component.css']
})
export class ListeMotifCompteurComponent implements OnInit {

  @Input() typeAbsencePourMotif: number;

  listeMotifCompteur: MotifCompteurDto[];

  selectedMotifCompteur: MotifCompteurDto = null;

  constructor(private _http: HttpClient) {
  }

  private getListeMotifCompteur(typeAbsence : number) {
    console.log(this.typeAbsencePourMotif);
    const url: string = environment.urlAbsWS + 'motifCompteur/getListeMotifCompteur?idRefType='+typeAbsence;
    console.log(url);
    return this._http.get<MotifCompteurDto[]>(url)
      .subscribe(data => {
        this.listeMotifCompteur = data;
      });
  }

  ngOnInit() {
    this.getListeMotifCompteur(this.typeAbsencePourMotif);
  }

  private onChange(event) {
    const value = parseInt(event.target.value, 10);
    this.selectedMotifCompteur = this.listeMotifCompteur.find(groupe => groupe.idMotifCompteur === value);
    console.log('value ' + this.selectedMotifCompteur.idMotifCompteur);
  }

}

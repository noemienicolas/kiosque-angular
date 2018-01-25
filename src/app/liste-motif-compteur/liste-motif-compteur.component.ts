import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import {MotifCompteurDto} from '../class/MotifCompteurDto';

@Component({
  selector: 'app-liste-motif-compteur',
  templateUrl: './liste-motif-compteur.component.html',
  styleUrls: ['./liste-motif-compteur.component.css']
})
export class ListeMotifCompteurComponent implements OnInit {

  @Input() typeAbsencePourMotif: number;

  //pour retourner l'élément selectionné
  @Output() changeMotifCompteur: EventEmitter<any> = new EventEmitter();

  listeMotifCompteur: MotifCompteurDto[] = [];
  selectedMotifCompteur: MotifCompteurDto = null;

  constructor(private _http: HttpClient) {
  }

  private getListeMotifCompteur(typeAbsence: number) {
    const url: string = environment.urlAbsWS + 'motifCompteur/getListeMotifCompteur?idRefType=' + typeAbsence;
    return this._http.get<MotifCompteurDto[]>(url)
      .subscribe(data => {
        this.listeMotifCompteur = data;
        //on initialise la valeur selectionnée
        this.selectedMotifCompteur = data[0];
        this.changeMotifCompteur.emit(this.selectedMotifCompteur);
      });
  }

  ngOnInit() {
    this.getListeMotifCompteur(this.typeAbsencePourMotif);
  }

  private onChange(event) {
    const value = parseInt(event.target.value, 10);
    this.selectedMotifCompteur = this.listeMotifCompteur.find(groupe => groupe.idMotifCompteur === value);
    this.changeMotifCompteur.emit(this.selectedMotifCompteur);
  }

}

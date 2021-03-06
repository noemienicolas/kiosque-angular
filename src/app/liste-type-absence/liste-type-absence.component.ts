import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';

// import des classes
import {GroupeAbsence} from '../class/GroupeAbsence';

@Component({
  selector: 'app-liste-type-absence',
  templateUrl: './liste-type-absence.component.html',
  styleUrls: ['./liste-type-absence.component.css']
})
export class ListeTypeAbsenceComponent implements OnInit {


  listeTypeAbsence: any = null;

  listeGroupeAbsence: GroupeAbsence[];

  selectedGroupeAbsence: GroupeAbsence = null;

  constructor(private _http: HttpClient, private router: Router) {
  }

  private onChange(event) {
    const value = parseInt(event.target.value, 10);
    this.selectedGroupeAbsence = this.listeGroupeAbsence.find(groupe => groupe.idRefGroupeAbsence === value);
    console.log('value ' + this.selectedGroupeAbsence.idRefGroupeAbsence);
    this.getListeTypeAbsence(this.selectedGroupeAbsence);
  }

  private getListeGroupeAbsence() {
    const url: string = environment.urlAbsWS + 'filtres/getGroupesAbsence';
    return this._http.get<GroupeAbsence[]>(url)
      .subscribe(data => {
        this.listeGroupeAbsence = data;
      });
  }

  private getListeTypeAbsence(valeurSelect: GroupeAbsence) {
    if (this.selectedGroupeAbsence == null) {

    } else {
      const url: string = environment.urlAbsWS + 'typeAbsence/getListeTypeAbsence?idRefGroupeAbsence=' + this.selectedGroupeAbsence.idRefGroupeAbsence;
      return this._http.get(url)
        .subscribe(data => {
          this.listeTypeAbsence = data;
        });
    }
  }

  private changeRoute(event) {
    const value = parseInt(event.target.value, 10);
    let link = ['/test',value];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.getListeGroupeAbsence();
  }

}

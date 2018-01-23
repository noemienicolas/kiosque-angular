import {Component} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';

// import des classes
import {GroupeAbsence} from './class/GroupeAbsence';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'app';

  listeTypeAbsence: any = null;

  listeGroupeAbsence: GroupeAbsence[];

  selectedGroupeAbsence: GroupeAbsence = null;

  constructor(private _http: Http) {
    this.getListeGroupeAbsence();
  }

  private onChange(event) {
    const value = parseInt(event.target.value, 10);
    this.selectedGroupeAbsence = this.listeGroupeAbsence.find(groupe => groupe.idRefGroupeAbsence === value);
    console.log('value ' + this.selectedGroupeAbsence.idRefGroupeAbsence);
    this.getListeTypeAbsence(this.selectedGroupeAbsence);
  }

  private getListeGroupeAbsence() {
    const url: string = environment.urlAbsWS + 'filtres/getGroupesAbsence';
    return this._http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        this.listeGroupeAbsence = data;
      });
  }

  private getListeTypeAbsence(valeurSelect: GroupeAbsence) {
    if (this.selectedGroupeAbsence == null) {

    } else {
      const url: string = environment.urlAbsWS + 'typeAbsence/getListeTypeAbsence?idRefGroupeAbsence='+this.selectedGroupeAbsence.idRefGroupeAbsence;
      return this._http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.listeTypeAbsence = data;
        });
    }
  }

}

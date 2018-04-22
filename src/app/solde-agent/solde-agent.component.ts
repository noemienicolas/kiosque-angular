import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

// import des classes
import {SoldeAgent} from '../class/SoldeAgent';

@Component({
  selector: 'app-solde-agent',
  templateUrl: './solde-agent.component.html',
  styleUrls: ['./solde-agent.component.css']
})
export class SoldeAgentComponent implements OnInit {

  soldeAgent: SoldeAgent = null;
  afficheAjoutSoleReposComp = false;
  afficheAjoutSoleCongeAnnuel = false;



  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    this.getSoldeAgent();
  }


  private getSoldeAgent() {
    const url: string = environment.urlAbsWS + 'solde/soldeAgent?idAgent=9005138';
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const options = {
      headers: headers
    };

    return this._http.post<SoldeAgent>(url, null, options)
      .subscribe(data => {
        this.soldeAgent = data;
      });
  }

  private openDialog(typeAbsence: number) {
    this.afficheAjoutSoleReposComp = false;
    this.afficheAjoutSoleCongeAnnuel = false;
    switch (typeAbsence) {
      case 1:
        this.afficheAjoutSoleReposComp = true;
        break;
      case 2:
        this.afficheAjoutSoleCongeAnnuel = true;
        break;
      default:
        break;
    }
  }
}

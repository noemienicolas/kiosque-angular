import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-detail-type-absence',
  templateUrl: './detail-type-absence.component.html',
  styleUrls: ['./detail-type-absence.component.css']
})
export class DetailTypeAbsenceComponent implements OnInit {
  id : number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //on recupere l'id de l'URL
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}

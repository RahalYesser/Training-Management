import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-student-profil',
  templateUrl: './student-profil.component.html',
  styleUrls: ['./student-profil.component.css']
})


export class StudentProfilComponent implements OnInit {
  name: any;

  constructor(
    private route: ActivatedRoute
    ) {
}
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    //this.name = params['student-profil'];
  });
}
}

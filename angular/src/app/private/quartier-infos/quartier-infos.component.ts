import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { QuartierService } from 'src/app/Services/quartier.service';
import { Quartier } from 'src/app/components/quartier';

// FormGroup, FormControl, FormBuilder, Validators
@Component({
  selector: 'app-quatier-infos',
  templateUrl: './quartier-infos.component.html',
  styleUrls: ['./quartier-infos.component.css']
})
export class QuartierInfosComponent implements OnInit {

  public quartier: any;

  constructor(builder: FormBuilder, private http: HttpClient, private quartierService: QuartierService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.quartierUser();
  }


  quartierUser() {
    let idQuartier = this.route.snapshot.params.id;
    console.log(idQuartier);
    this.quartierService.getOneQuartier(idQuartier).subscribe(
      res => {
        console.log(res['quartier']);
        let quartier = res['quartier'];

        this.quartier = quartier;

      },
      err => {
        console.log(err);
      }
    )
  }


}

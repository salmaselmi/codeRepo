import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { CommuneService } from 'src/app/Services/commune.service';

@Component({
  selector: 'app-communes-list',
  templateUrl: './communes-list.component.html',
  styleUrls: ['./communes-list.component.css']
})
export class CommunesListComponent implements OnInit { 
  @ViewChild('viewModal')modal:any;

  communesList = [];
  communeDelete; 
  dialog: any;
  isPopupOpened: boolean;
  commune:any;


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private communeService: CommuneService) { }

  ngOnInit(): void {
    this.communeService.getAllCommunes().subscribe(
      result => {
        console.log(result);
        this.communesList = result;
      },
      error => {
        console.log(error);
      }
    )
  }
  onViewClick(commune){
    this.commune = commune; 
    let idCommune = this.route.snapshot.params.id;
  console.log(idCommune);
  this.communeService.getOneCommune(idCommune).subscribe(
    res => {
      console.log(res['commune']);
      let commune = res['commune'];

      this.commune = commune;

    },
    err => {
      console.log(err);
    }
  )
}


  deleteRow(event) {
    this.communeDelete = event;
  }

  delete() {
    let index = this.communesList.indexOf(this.communeDelete);
    this.communesList.splice(index, 1);
    this.communeService.deleteCommune(this.communeDelete._id).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }

    )
    document.getElementById("closeModalButton").click();
  }

}
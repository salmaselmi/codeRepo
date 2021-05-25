import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { CommuneService }  from 'src/app/Services/commune.service'; 
import { Commune } from 'src/app/components/commune';
  
@Component({
  selector: 'app-communes-add',
  templateUrl: './communes-add.component.html',
  styleUrls: ['./communes-add.component.css']
})
export class CommunesAddComponent implements OnInit {

  public communesAddForm: FormGroup;

  constructor(builder: FormBuilder,private communeService: CommuneService, private router:Router , private http:HttpClient) {

    let communesAddControls = 
    {
      IdCommune: new FormControl("", [ Validators.required]),

      gouv: new FormControl("", [ Validators.required]), 

      NomCommuneFR: new FormControl("", [Validators.required]),

      NomCommuneAR: new FormControl("",[Validators.required])

 
    }

    this.communesAddForm = builder.group(communesAddControls)

  }

  get IdCommune() { return this.communesAddForm.get('IdCommune') }
  get gouv() { return this.communesAddForm.get('gouv') }
  get NomCommuneFR() { return this.communesAddForm.get('NomCommuneFR') }
  get NomCommuneAR() { return this.communesAddForm.get('NomCommuneAR') } 





  ngOnInit(): void {
    console.log('test'); 
  }


  communesUser() {
     console.log('test');

     let data = this.communesAddForm.value;
     let commune = new Commune(data.IdCommune,data.gouv,data.NomCommuneFR,data.NomCommuneAR);
     
     console.log(commune)
    
     this.communeService.addCommune(commune)
  
      .subscribe(
       res => { 

         this.router.navigate(['/communes/list']);
       },
      error => {
         alert(JSON.stringify(error));
       }
     )
     // let project = data
  } 
}


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { GouvernoratService }  from 'src/app/Services/gouvernorat.service'; 
import { Gouvernorat } from 'src/app/components/gouvernorat';
  
@Component({
  selector: 'app-gouvernorats-add',
  templateUrl: './gouvernorats-add.component.html',
  styleUrls: ['./gouvernorats-add.component.css']
})
export class GouvernoratsAddComponent implements OnInit {

  public gouvernoratsAddForm: FormGroup;

  constructor(builder: FormBuilder,private gouvernoratService: GouvernoratService, private router:Router , private http:HttpClient) {

    let gouvernoratsAddControls = 
    {
      Idgouv: new FormControl("", [ Validators.required]),

      NomGouvernoratFR: new FormControl("", [Validators.required]),

      NomGouvernoratAR: new FormControl("",[Validators.required]),

 
 
    }

    this.gouvernoratsAddForm = builder.group(gouvernoratsAddControls)

  }

  get Idgouv() { return this.gouvernoratsAddForm.get('Idgouv') }
  get NomGouvernoratFR() { return this.gouvernoratsAddForm.get('NomGouvernoratFR') }
  get NomGouvernoratAR() { return this.gouvernoratsAddForm.get('NomGouvernoratAR') } 
 




  ngOnInit(): void {
    console.log('test'); 
  }


  gouvernoratsUser() {
     console.log('test');

     let data = this.gouvernoratsAddForm.value;
     let gouvernorat = new Gouvernorat(data.Idgouv,data.NomGouvernoratFR,data.NomGouvernoratAR,data._id);
     
     console.log(gouvernorat)
    
     this.gouvernoratService.addGouvernorat(gouvernorat)
  
      .subscribe(
       res => { 

         this.router.navigate(['/gouvernorats/list']);
       },
      error => {
         alert(JSON.stringify(error));
       }
     )
     // let project = data
  } 
}

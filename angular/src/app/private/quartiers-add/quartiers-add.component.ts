import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { QuartierService }  from 'src/app/Services/quartier.service'; 
import { Quartier } from 'src/app/components/quartier';
 
@Component({
  selector: 'app-quartiers-add',
  templateUrl: './quartiers-add.component.html',
  styleUrls: ['./quartiers-add.component.css']
})

export class QuartiersAddComponent implements OnInit {

  public quartiersAddForm: FormGroup;
  filePath:string;
  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  constructor(builder: FormBuilder,private quartierService: QuartierService, private router:Router, private http: HttpClient) {

    let quartiersAddControls = 
    {
      gouvernorat: new FormControl("", [ Validators.required]),

      Commune: new FormControl("", [ Validators.required]),

      IdQuartier: new FormControl("", [ Validators.required]),

      NomQuartier: new FormControl("", [Validators.required]),
      
      lat: new FormControl("", [Validators.required]),

      long: new FormControl("", [Validators.required]),

      img: new FormControl(""), 
    }

    this.quartiersAddForm = builder.group(quartiersAddControls)

  }
  get gouvernorat() { return this.quartiersAddForm.get('gouvernorat') }
  get Commune() { return this.quartiersAddForm.get('Commune') }
  get IdQuartier() { return this.quartiersAddForm.get('IdQuartier') }
  get NomQuartier() { return this.quartiersAddForm.get('NomQuartier') }
  get lat () { return this.quartiersAddForm.get('lat') }
  get long() { return this.quartiersAddForm.get('long') }
  get img() { return this.quartiersAddForm.get('img') } 




  ngOnInit(): void {
    
  }
  onFileChanged(event:Event){
    console.log(event);
    const file=(event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  quartiersUser() {
      let data = this.quartiersAddForm.value;
     let quartier = new Quartier(data.gouvernorat,data.Commune,data.IdQuartier,data.NomQuartier,data.lat,data.long,this.filePath);
     
     this.quartierService.addQuartier(quartier).subscribe(
       res => {
   

         this.router.navigate(['/quartiers/list']);
       },
       error => {
         alert(JSON.stringify(error));
       }
     ) 
 

  }

}
 
 



import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { QuartierService } from 'src/app/Services/quartier.service';
import { Quartier } from 'src/app/components/quartier';

@Component({
  selector: 'app-quartier-update',
  templateUrl: './quartier-update.component.html',
  styleUrls: ['./quartier-update.component.css']
})
export class QuartierUpdateComponent implements OnInit {

  public quartierUpdateForm: FormGroup;
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
  constructor(builder: FormBuilder,private http:HttpClient, private quartierService: QuartierService, private router: Router, private route: ActivatedRoute) {

    let quartierUpdateControls =
    {
      gouvernorat: new FormControl("", [ Validators.required]),

      Commune: new FormControl("", [ Validators.required]),

      IdQuartier: new FormControl("", [ Validators.required]),

      NomQuartier: new FormControl("", [Validators.required]),
      
      lat: new FormControl("", [Validators.required]),

      long: new FormControl("", [Validators.required]),

      img: new FormControl("", [Validators.required]), 

      _id: new FormControl("", [Validators.required])
    }

    this.quartierUpdateForm = builder.group(quartierUpdateControls)

  }
  get gouvernorat() { return this.quartierUpdateForm.get('gouvernorat') }
  get Commune() { return this.quartierUpdateForm.get('Commune') }
  get IdQuartier() { return this.quartierUpdateForm.get('IdQuartier') }
  get NomQuartier() { return this.quartierUpdateForm.get('NomQuartier') }
  get lat () { return this.quartierUpdateForm.get('lat') }
  get long() { return this.quartierUpdateForm.get('long') }
  get img() { return this.quartierUpdateForm.get('img') }  
  get _id() { return this.quartierUpdateForm.get('_id') }








  ngOnInit(): void {
    let idQuartier = this.route.snapshot.params.id;
    console.log(idQuartier);
    this.quartierService.getOneQuartier(idQuartier).subscribe(
      res => {
        console.log(res['quartier']);
        let quartier = res['quartier']; 
         this.quartierUpdateForm.patchValue({

           
          gouvernorat: quartier.gouvernorat,
          Commune: quartier.Commune,
          IdQuartier: quartier.IdQuartier,
          NomQuartier: quartier.NomQuartier,
          lat: quartier.lat,
          long: quartier.long,
          img: quartier.img, 
          _id: quartier._id
  

        })

      },
      err => {
        console.log(err);
      }
    )
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
  updateQuartier() {
    
    let data = this.quartierUpdateForm.value;
    let quartier = new Quartier(data.gouvernorat,data.Commune,data.IdQuartier,data.NomQuartier,data.lat,data.long,data.img,data._id);
    //alert(JSON.stringify(data))

    this.quartierService.updateQuartier(quartier,quartier._id).subscribe(
      res => {
        
        this.router.navigate(['/projects/list']);
      }   ,
       error =>{
        alert(JSON.stringify(error));
      }
    )
  }
    

}



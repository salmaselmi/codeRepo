import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { ProjetService }  from 'src/app/Services/projet.service'; 
import { Projet } from 'src/app/components/projet';
 
@Component({
  selector: 'app-tunis-add',
  templateUrl: './tunis-add.component.html',
  styleUrls: ['./tunis-add.component.css']
})
export class TunisAddComponent implements OnInit {

  public tunisAddForm: FormGroup;

  constructor(builder: FormBuilder,private projetService: ProjetService, private router:Router, private http: HttpClient) {

    let tunisAddControls = 
    {
      Id: new FormControl("", [ Validators.required]),

      gouvernorat: new FormControl("", [Validators.required]),

      Commune: new FormControl("",[Validators.required]),
      
      Nb_maisons: new FormControl("", [Validators.required]),

      Nb_quartiers: new FormControl("", [Validators.required]),

      Nb_habitants: new FormControl("", [Validators.required]),

      superficie_quartier: new FormControl("", [Validators.required]),

      superficie_quartier_couvert: new FormControl("", [Validators.required]),

      rapport_superficie: new FormControl("", [Validators.required]),

      taux_habitation: new FormControl("", [Validators.required]),

      rapport_depense_maison: new FormControl("", [Validators.required]),
     
      composante_projet: new FormControl("", [Validators.required]),

      voiries_cout: new FormControl("", [Validators.required]),

      voiries_taux: new FormControl("", [Validators.required]),

      Voiries_qte: new FormControl("", [Validators.required])
 
    }

    this.tunisAddForm = builder.group(tunisAddControls)

  }

  get Id() { return this.tunisAddForm.get('Id') }
  get gouvernorat() { return this.tunisAddForm.get('gouvernorat') }
  get Commune() { return this.tunisAddForm.get('Commune') }
  get Nb_maisons() { return this.tunisAddForm.get('Nb_maisons') }
  get Nb_quartiers() { return this.tunisAddForm.get('Nb_quartiers') }
  get Nb_habitants() { return this.tunisAddForm.get('Nb_habitants') }
  get superficie_quartier() { return this.tunisAddForm.get('superficie_quartier') }
  get superficie_quartier_couvert() { return this.tunisAddForm.get('superficie_quartier_couvert') }
  get rapport_superficie() { return this.tunisAddForm.get('rapport_superficie') }
  get taux_habitation() { return this.tunisAddForm.get('taux_habitation') }
  get rapport_depense_maison() { return this.tunisAddForm.get('rapport_depense_maison') }
  get composante_projet() { return this.tunisAddForm.get('composante_projet') }
  get voiries_cout() { return this.tunisAddForm.get('voiries_cout') }
  get voiries_taux() { return this.tunisAddForm.get('voiries_taux') }
  get Voiries_qte() { return this.tunisAddForm.get('Voiries_qte') }




  ngOnInit(): void {
  }


  projetsUser() {
     let data = this.tunisAddForm.value;
     let projet = new Projet(data.Id,data.gouvernorat,data.Commune,data.Nb_maisons,data.Nb_quartiers,data.Nb_habitants,data.superficie_quartier,data.superficie_quartier_couvert,data.rapport_superficie, data.taux_habitation,data.rapport_depense_maison,data.composante_projet,data.voiries_cout ,data.voiries_taux,data.Voiries_qte);
     
     this.projetService.addProjet(projet).subscribe(
       res => {
   

         this.router.navigate(['/projets/tunis']);
       },
       error => {
         alert(JSON.stringify(error));
       }
     )
     // let project = data
 

  }

}


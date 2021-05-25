import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { ProjectService }  from 'src/app/Services/project.service'; 
import { Project } from 'src/app/components/project';
 
@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.css']
})
export class ProjectsAddComponent implements OnInit {

  public projectsAddForm: FormGroup;

  constructor(builder: FormBuilder,private projectService: ProjectService, private router:Router, private http: HttpClient) {

    let projectsAddControls = 
    {
      Id: new FormControl("", [ Validators.required]),
    
      Nom: new FormControl("", [ Validators.required]),

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

    this.projectsAddForm = builder.group(projectsAddControls)

  }

  get Id() { return this.projectsAddForm.get('Id') }
  get Nom() { return this.projectsAddForm.get('Nom') }
  get gouvernorat() { return this.projectsAddForm.get('gouvernorat') }
  get Commune() { return this.projectsAddForm.get('Commune') }
  get Nb_maisons() { return this.projectsAddForm.get('Nb_maisons') }
  get Nb_quartiers() { return this.projectsAddForm.get('Nb_quartiers') }
  get Nb_habitants() { return this.projectsAddForm.get('Nb_habitants') }
  get superficie_quartier() { return this.projectsAddForm.get('superficie_quartier') }
  get superficie_quartier_couvert() { return this.projectsAddForm.get('superficie_quartier_couvert') }
  get rapport_superficie() { return this.projectsAddForm.get('rapport_superficie') }
  get taux_habitation() { return this.projectsAddForm.get('taux_habitation') }
  get rapport_depense_maison() { return this.projectsAddForm.get('rapport_depense_maison') }
  get composante_projet() { return this.projectsAddForm.get('composante_projet') }
  get voiries_cout() { return this.projectsAddForm.get('voiries_cout') }
  get voiries_taux() { return this.projectsAddForm.get('voiries_taux') }
  get Voiries_qte() { return this.projectsAddForm.get('Voiries_qte') }




  ngOnInit(): void {
  }


  projectsUser() {
      let data = this.projectsAddForm.value;
     let project = new Project(data.Id,data.Nom,data.gouvernorat,data.Commune,data.Nb_maisons,data.Nb_quartiers,data.Nb_habitants,data.superficie_quartier,data.superficie_quartier_couvert,data.rapport_superficie, data.taux_habitation,data.rapport_depense_maison,data.composante_projet,data.voiries_cout ,data.voiries_taux,data.Voiries_qte);
     
     this.projectService.addProject(project).subscribe(
       res => {
   

         this.router.navigate(['/projects/list']);
       },
       error => {
         alert(JSON.stringify(error));
       }
     )
     // let project = data
 

  }

}


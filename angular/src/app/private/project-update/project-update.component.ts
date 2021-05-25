import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';
import { Project } from 'src/app/components/project';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {

  public projectUpdateForm: FormGroup;

  constructor(builder: FormBuilder,private http:HttpClient, private projectService: ProjectService, private router: Router, private route: ActivatedRoute) {

    let projectUpdateControls =
    {
      Id: new FormControl("", [Validators.required]),

      Nom: new FormControl("", [Validators.required]),

      gouvernorat: new FormControl("", [Validators.required]),

      Commune: new FormControl("", [Validators.required]),

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

      Voiries_qte: new FormControl("", [Validators.required]),

      _id: new FormControl("", [Validators.required])
    }

    this.projectUpdateForm = builder.group(projectUpdateControls)

  }

  get Id() { return this.projectUpdateForm.get('Id') }
  get Nom() { return this.projectUpdateForm.get('Nom') }
  get gouvernorat() { return this.projectUpdateForm.get('gouvernorat') }
  get Commune() { return this.projectUpdateForm.get('Commune') }
  get Nb_maisons() { return this.projectUpdateForm.get('Nb_maisons') }
  get Nb_quartiers() { return this.projectUpdateForm.get('Nb_quartiers') }
  get Nb_habitants() { return this.projectUpdateForm.get('Nb_habitants') }
  get superficie_quartier() { return this.projectUpdateForm.get('superficie_quartier') }
  get superficie_quartier_couvert() { return this.projectUpdateForm.get('superficie_quartier_couvert') }
  get rapport_superficie() { return this.projectUpdateForm.get('rapport_superficie') }
  get taux_habitation() { return this.projectUpdateForm.get('taux_habitation') }
  get rapport_depense_maison() { return this.projectUpdateForm.get('rapport_depense_maison') }
  get composante_projet() { return this.projectUpdateForm.get('composante_projet') }
  get voiries_cout() { return this.projectUpdateForm.get('voiries_cout') }
  get voiries_taux() { return this.projectUpdateForm.get('voiries_taux') }
  get Voiries_qte() { return this.projectUpdateForm.get('Voiries_qte') }
  get _id() { return this.projectUpdateForm.get('_id') }








  ngOnInit(): void {
    let idProject = this.route.snapshot.params.id;
    console.log(idProject);
    this.projectService.getOneProject(idProject).subscribe(
      res => {
        console.log(res['project']);
        let project = res['project']; 
         this.projectUpdateForm.patchValue({

          Id: project.Id,
          Nom: project.Nom,
          gouvernorat: project.gouvernorat,
          Commune: project.Commune,
          Nb_maisons: project.Nb_maisons,
          Nb_quartiers: project.Nb_quartiers,
          Nb_habitants: project.Nb_habitants,
          superficie_quartier: project.superficie_quartier,
          superficie_quartier_couvert: project.superficie_quartier_couvert,
          rapport_superficie: project.rapport_superficie,
          taux_habitation: project.taux_habitation,
          rapport_depense_maison: project.rapport_depense_maison,
          composante_projet: project.composante_projet,
          voiries_cout: project.voiries_cout,
          voiries_taux: project.voiries_taux,
          Voiries_qte: project.Voiries_qte ,
          _id: project._id
  

        })

      },
      err => {
        console.log(err);
      }
    )
  }
  

  updateProject() {
    
    let data = this.projectUpdateForm.value;
    let project = new Project(data.Id,data.Nom,data.gouvernorat,data.Commune,data.Nb_maisons,data.Nb_quartiers,data.Nb_habitants,data.superficie_quartier,data.superficie_quartier_couvert,data.rapport_superficie, data.taux_habitation,data.rapport_depense_maison,data.composante_projet,data.voiries_cout ,data.voiries_taux,data.Voiries_qte,data._id);
    //alert(JSON.stringify(data))

    this.projectService.updateProject(project,project._id).subscribe(
      res => {
        
        this.router.navigate(['/projects/list']);
      }   ,
       error =>{
        alert(JSON.stringify(error));
      }
    )
  }
    

}


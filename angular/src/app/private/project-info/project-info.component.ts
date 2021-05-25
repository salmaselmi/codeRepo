import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';
import { Project } from 'src/app/components/project';

// FormGroup, FormControl, FormBuilder, Validators
@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  public project: any;

  constructor(builder: FormBuilder, private http: HttpClient, private projectService: ProjectService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.projectUser();
  }


  projectUser() {
    let idProject = this.route.snapshot.params.id;
    console.log(idProject);
    this.projectService.getOneProject(idProject).subscribe(
      res => {
        console.log(res['project']);
        let project = res['project'];

        this.project = project;

      },
      err => {
        console.log(err);
      }
    )
  }


}

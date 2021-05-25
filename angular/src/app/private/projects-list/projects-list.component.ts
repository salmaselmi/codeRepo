import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
 
  /* public projects: any [] = [];
  projectsList: any [] = []; 
  projectDelete;

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      result =>{
        this.projectsList= result;
      },
      error =>{
       console.log(error);
     }
    )
  }

  filter(value) {
    console.log(value);
    if (value != null || value != '' ) {
      this.projectsList=[];
      this.projectsList = this.projects.filter((ct) => { 
        return ct.Id.toLowerCase().includes(value.toLowerCase())
      })
    } else{
      this.projectsList=[];
      this.projectsList=this.projects;
    }
    
  }

  deleteRow(event) {
    this.projectDelete = event;
  } 
   delete(){
  let index = this.projectsList.indexOf(this.projectDelete);
  this.projectsList.splice(index,1);
  this.projectService.deleteProject(this.projectDelete._id).subscribe(
   res => {
     console.log(res);
   },
   err => {
     console.log(err);
   }

 )
 document.getElementById("closeModalButton").click();
}

} */

public projects: any [] = [];
  projectDelete;
  projectsList:any[]=[];

  constructor(private projectService:ProjectService) { }
  
  ngOnInit(): void {
    this.getAllProjects();
  }

  deleteRow(event) {
    this.projectDelete = event;
  } 

  delete(){
    let index = this.projectsList.indexOf(this.projectDelete);
    this.projectsList.splice(index,1);
    this.projectService.deleteProject(this.projectDelete._id).subscribe(
     res => {
       console.log(res);
     },
     err => {
       console.log(err);
     }
  
   )
   document.getElementById("closeModalButton").click();
  }

  getAllProjects(){
    this.projectsList=[];

    this.projectService.getAllProjects().subscribe(
      result =>{
        this.projectsList=result;
        this.projects = result;
      },
      error =>{
        console.log(error);
      }
    )
  }
  
  filter(value) {
    console.log(value);
    if (value != null || value != '' ) {
      this.projectsList=[];
      this.projectsList = this.projects.filter((ct) => { 
        return ct.Nom.toLowerCase().includes(value.toLowerCase())
      })
    } else{
      this.projectsList=[];
      this.projectsList=this.projects;
    }
    
  }

}
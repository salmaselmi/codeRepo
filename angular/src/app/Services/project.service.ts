import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../components/project';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private addProjectUrl = "http://localhost:3001/project/add";
  private getOneProjectUrl = "http://localhost:3001/project/one/"
  private updateProjectUrl = "http://localhost:3001/project/update-info/"
  private deleteProjectUrl= "http://localhost:3001/project/remove/"
  constructor(private http: HttpClient) { } //http howa object ml HttpClient

  getAllProjects() {
    let data = this.http.get<any>("http://localhost:3001/project/all")
    return data;
  }

   getOneProject( id:string) {
    return this.http.get<any>(this.getOneProjectUrl+id);
    }

  addProject(project: Project) {
    return this.http.post<any>(this.addProjectUrl, project);
  }
  
  updateProject(project: Project , id:string) {
    return this.http.put<any>(this.updateProjectUrl+id, project);
  } 

  deleteProject(id:String){
    return this.http.delete<any>(this.deleteProjectUrl+id)
  }
}

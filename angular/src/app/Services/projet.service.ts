import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Projet } from '../components/projet';
  


@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  
   private addProjetUrl="http://localhost:3001/projet/add"; 
  private getOneProjetUrl = "http://localhost:3001/projet/one/"
  private updateProjetUrl = "http://localhost:3001/projet/update-info/"
  private deleteProjetUrl= "http://localhost:3001/projet/remove/"

   constructor( private http:HttpClient) { } //http howa object ml HttpClient

  getAllProjets(){
    let data = this.http.get<any>("http://localhost:3001/projet/all")
    return data;
  }
   getOneProjet(id:string) {
    return this.http.get<any>(this.getOneProjetUrl+id);
    }

  addProjet(projet:Projet){
    return this.http.post<any>(this.addProjetUrl,projet);
   }

   updateProjet(projet: Projet) {
    return this.http.put<any>(this.updateProjetUrl, projet);
  } 

   deleteProjet(id:String){
    return this.http.delete<any>(this.deleteProjetUrl+id)
  }
}

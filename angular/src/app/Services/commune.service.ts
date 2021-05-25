import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commune } from '../components/commune';



@Injectable({
  providedIn: 'root'
})
export class CommuneService {
  private addCommuneUrl="http://localhost:3001/commune/add";
  private deleteCommuneUrl= "http://localhost:3001/commune/remove/"
  private getOneCommuneUrl = "http://localhost:3001/commune/one/"
  private updateCommuneUrl = "http://localhost:3001/commune/update-info/"

  constructor( private http:HttpClient) { } //http howa object ml HttpClient

 getAllCommunes(){
   let data = this.http.get<any>("http://localhost:3001/commune/all")
   return data;
 }

 addCommune(commune:Commune){
   return this.http.post<any>(this.addCommuneUrl,commune);
  }

  getOneCommune(id: string) {
    return this.http.get<any>(this.getOneCommuneUrl + id);
  }

  updateCommune(commune: Commune, id: string) {
    return this.http.put<any>(this.updateCommuneUrl + id, commune);
  }

  deleteCommune(id:String){
    return this.http.delete<any>(this.deleteCommuneUrl+id)
  }
  
  _communeList: Commune[] = [];

}

import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Quartier } from '../components/quartier';
@Injectable({
  providedIn: 'root'
})
export class QuartierService {

  private addQuartierUrl = "http://localhost:3001/quartier/add";
  private getOneQuartierUrl = "http://localhost:3001/quartier/one/"
  private updateQuartierUrl = "http://localhost:3001/quartier/update-info/"
  private deleteQuartierUrl= "http://localhost:3001/quartier/remove/"
  constructor(private http: HttpClient) { } //http howa object ml HttpClient

  getAllQuartiers() {
    let data = this.http.get<any>("http://localhost:3001/quartier/all")
    return data;
  }

   getOneQuartier( id:string) {
    return this.http.get<any>(this.getOneQuartierUrl+id);
    }

  addQuartier(quartier: Quartier) {
    return this.http.post<any>(this.addQuartierUrl, quartier);
  }
  
  updateQuartier(quartier: Quartier , id:string) {
    return this.http.put<any>(this.updateQuartierUrl+id, quartier);
  } 

  deleteQuartier(id:String){
    return this.http.delete<any>(this.deleteQuartierUrl+id)
  }
}

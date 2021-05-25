import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gouvernorat } from '../components/gouvernorat';



@Injectable({
  providedIn: 'root'
})
export class GouvernoratService {

  private addGouvernoratUrl = "http://localhost:3001/gouvernorat/add";
  private deleteGouvernoratUrl = "http://localhost:3001/gouvernorat/remove/"
  private getOneGouvernoratUrl = "http://localhost:3001/gouvernorat/one/"
  private updateGouvernoratUrl = "http://localhost:3001/gouvernorat/update-info/"

  constructor(private http: HttpClient) { } //http howa object ml HttpClient

  getAllGouvernorats() {
    let data = this.http.get<any>("http://localhost:3001/gouvernorat/all")
    return data;
  }

  addGouvernorat(gouvernorat: Gouvernorat) {
    return this.http.post<any>(this.addGouvernoratUrl, gouvernorat);
  }

  getOneGouvernorat(id: string) {
    return this.http.get<any>(this.getOneGouvernoratUrl + id);
  }

  updateGouvernorat(gouvernorat: Gouvernorat, id: string) {
    return this.http.put<any>(this.updateGouvernoratUrl + id, gouvernorat);
  }

  deleteGouvernorat(id: String) {
    return this.http.delete<any>(this.deleteGouvernoratUrl + id)
  }

  _gouvernoratList: Gouvernorat[] = [];

  /* updateGouvernorat(gouvernorat: Gouvernorat ) {
    const index = this._gouvernoratList.findIndex(g => g._id === gouvernorat._id);
    this._gouvernoratList[index] = gouvernorat;
  }
  getAllgouvernorat() {
   return this._gouvernoratList;
  } */
}
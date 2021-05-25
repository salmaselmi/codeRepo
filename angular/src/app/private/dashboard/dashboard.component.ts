import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
  import JWT from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/components/user'
import { UserService } from 'src/app/Services/user.service';
  
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboardForm: FormGroup;
  constructor(builder: FormBuilder/* , private http: HttpClient, private userService: UserService, private user: User */) {

    let dashboardControls = {

      act: new FormControl("", [
        Validators.required
      ]),
      nouveau: new FormControl("", [
        Validators.required
      ]),
      conf: new FormControl("", [
        Validators.required
      ]),

   /*   nom: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Z][a-z 'éç]+")
      ]),

       prenom: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Z][a-z 'éç]+")
      ]),
     
      phone: new FormControl("", [

      ]) ,
      fonctionnalite: new FormControl("", [
        Validators.required
      ])
 */


    }
    this.dashboardForm = builder.group(dashboardControls)
  }
  get act() { return this.dashboardForm.get('act') }
  get nouveau() { return this.dashboardForm.get('nouveau') }
  get conf() { return this.dashboardForm.get('conf') }
 /*  get nom() { return this.dashboardForm.get('nom') }
  get prenom() { return this.dashboardForm.get('prenom') }
  get phone() { return this.dashboardForm.get('phone') } 
  get fonctionnalite() { return this.dashboardForm.get('fonctionnalite')} 
 */
  ngOnInit(): void {
  /*   let token = localStorage.getItem("mytoken");
    let t = JWT(token);
    const data = JSON.parse(JSON.stringify(t));
    console.log(typeof t)
    const id = data.id
    console.log(typeof data)
    console.log(id);
    this.http.get<any>('http://localhost:3001/user/currentUser/' + id)
      .subscribe(
        (result) => {
          console.log(result);
          const data = JSON.parse(JSON.stringify(result))
          this.dashboardForm.patchValue({
            nom: data.nom, prenom: data.prenom, phone:data.phone, fonctionnalite:data.fonctionnalite

          });
        },
        (error) => {
          console.log(error);
        }
      ) */
  }


  dashboardUser() {
    console.log(this.dashboardForm.value);
  }
}


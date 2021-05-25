import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/components/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  public userUpdateForm: FormGroup;
  public userForm: FormGroup;
  fonc:string

  constructor(builder: FormBuilder,private http:HttpClient, private userService: UserService, private router: Router, private route: ActivatedRoute) {

    let userUpdateControls =
   {
      nom: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("[A-Z][a-z 'éç]+")
    ]),

      prenom: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Z][a-z 'éç]+")
      ]),

      email: new FormControl("", [
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.required
      ]),

      phone: new FormControl("", [
         
      ]),

      _id: new FormControl("", [
        Validators.required
      ])
    }
    let userControls ={
   
      fonctionnalite: new FormControl("", [
        Validators.required
      ]) 

     }

    this.userUpdateForm = builder.group(userUpdateControls)
    this.userForm = builder.group(userControls)
  }

  get nom() { return this.userUpdateForm.get('nom') }
  get prenom() { return this.userUpdateForm.get('prenom') }
  get email() { return this.userUpdateForm.get('email') }
  get password() { return this.userUpdateForm.get('password') }
  get phone() { return this.userUpdateForm.get('phone') }
  get fonctionnalite() { return this.userForm.get('fonctionnalite')}
  get _id() { return this.userUpdateForm.get('_id') }



  ngOnInit(): void {
    let idUser = this.route.snapshot.params.id;
    console.log(idUser);
    this.userService.getOneUser(idUser).subscribe(
      res => {
        console.log(res['user']);
        let user = res['user']; 
         this.userUpdateForm.patchValue({

          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
          password: user.password,
          phone: user.phone,
          fonctionnalite: user.fonctionnalite, 
          _id: user._id
  

        })

      },
      err => {
        console.log(err);
      }
    )
  }
  

  updateUser() {
    
    let data = this.userUpdateForm.value;
    let user = new User(data.nom,data.prenom,data.email,data.password,data.phone,this.fonc,data._id);
 
    this.userService.updateUser(user,user._id).subscribe(
      res => {
        
        this.router.navigate(['/user/param']);
      }   ,
       error =>{
        alert(JSON.stringify(error));
      }
    )
  }


  UserPop(){
    console.log("test");
    this.fonc=this.userForm.value.fonctionnalite;
    document.getElementById("closeModalButton").click();
  }


}


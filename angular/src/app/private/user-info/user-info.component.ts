import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/components/user';

// FormGroup, FormControl, FormBuilder, Validators
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public user: any;

  constructor(builder: FormBuilder, private http: HttpClient, private userService: UserService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.userUser();
  }


  userUser() {
    let idUser = this.route.snapshot.params.id;
    console.log(idUser);
    this.userService.getOneUser(idUser).subscribe(
      res => {
        console.log(res['user']);
        let user = res['user'];

        this.user = user;

      },
      err => {
        console.log(err);
      }
    )
  }


}


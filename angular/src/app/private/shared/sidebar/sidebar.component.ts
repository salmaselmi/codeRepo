import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public isAdmin : Boolean
  public isUser : Boolean

  constructor() { }

  ngOnInit(): void {
    const helper = new JwtHelperService();

    let token = localStorage.getItem("mytoken")

    const decodedToken = helper.decodeToken(token);

    if (decodedToken.role == "user") {
      this.isUser = true;
      this.isAdmin = false;
    }

    if (decodedToken.role == "admin") {
      this.isUser = false;
      this.isAdmin = true;
    }

  }

}



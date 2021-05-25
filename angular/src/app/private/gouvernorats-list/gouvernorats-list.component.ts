import { Component, OnInit, ViewChild } from '@angular/core'; 

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { GouvernoratService } from 'src/app/Services/gouvernorat.service';

@Component({
  selector: 'app-gouvernorats-list',
  templateUrl: './gouvernorats-list.component.html',
  styleUrls: ['./gouvernorats-list.component.css']
})
export class GouvernoratsListComponent implements OnInit {
  @ViewChild('viewModal')modal:any;

  gouvernoratsList=[]; 
  gouvernoratDelete; 
  dialog: any;
  isPopupOpened: boolean;
  gouvernorat:any;
 
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private gouvernoratService:GouvernoratService) { }
 

  ngOnInit(): void {
    this.gouvernoratService.getAllGouvernorats().subscribe(
      result =>{
        console.log(result);
        this.gouvernoratsList= result;
      },
      error =>{
        console.log(error);
      }
    )
    }
    onViewClick(gouvernorat){
      this.gouvernorat = gouvernorat; 
      let idGouvernorat = this.route.snapshot.params.id;
    console.log(idGouvernorat);
    this.gouvernoratService.getOneGouvernorat(idGouvernorat).subscribe(
      res => {
        console.log(res['gouvernorat']);
        let gouvernorat = res['gouvernorat'];

        this.gouvernorat = gouvernorat;

      },
      err => {
        console.log(err);
      }
    )
  }

      //this.modal.nativeElement.className = 'modal fade show';
    

  /*   updateGouvernorat(id: number) {
      this.isPopupOpened = true;
      const gouvernorat = this.gouvernoratService.getAllgouvernorat().find(g => g._id === id);
      const dialogRef = this.dialog.open(GouvernoratsListComponent, {
        data: gouvernorat
      });
  
  
      dialogRef.afterClosed().subscribe(result => {
        this.isPopupOpened = false;
      });
    } */
   
  deleteRow(event) {
    this.gouvernoratDelete = event;
  } 
 
  delete(){
    let index = this.gouvernoratsList.indexOf(this.gouvernoratDelete);
    this.gouvernoratsList.splice(index,1);
    this.gouvernoratService.deleteGouvernorat(this.gouvernoratDelete._id).subscribe(
     res => {
       console.log(res);
     },
     err => {
       console.log(err);
     }
  
   )
   document.getElementById("closeModalButton").click();
  }

}
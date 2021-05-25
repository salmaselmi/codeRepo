import { Component, OnInit } from '@angular/core';
import { QuartierService } from 'src/app/Services/quartier.service';

@Component({
  selector: 'app-quartiers-list',
  templateUrl: './quartiers-list.component.html',
  styleUrls: ['./quartiers-list.component.css']
})
export class QuartiersListComponent implements OnInit {
  quartiersList=[];
  
  quartierDelete;

  constructor(private quartierService:QuartierService) { }

  ngOnInit(): void {
    this.quartierService.getAllQuartiers().subscribe(
      result =>{
        this.quartiersList= result;
      },
      error =>{
       console.log(error);
     }
    )
  }
  deleteRow(event) {
    this.quartierDelete = event;
  } 
   delete(){
  let index = this.quartiersList.indexOf(this.quartierDelete);
  this.quartiersList.splice(index,1);
  this.quartierService.deleteQuartier(this.quartierDelete._id).subscribe(
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
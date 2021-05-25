import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/Services/projet.service';


@Component({
  selector: 'app-projets-tunis',
  templateUrl: './projets-tunis.component.html',
  styleUrls: ['./projets-tunis.component.css']
})
export class ProjetsTunisComponent implements OnInit {
  projetsTunis=[];
  projetDelete;


  constructor(private projetService:ProjetService) { }

  ngOnInit(): void {
    this.projetService.getAllProjets().subscribe(
      result =>{
        this.projetsTunis= result;
      },
      error =>{
       console.log(error);
     }
    )
  }
  deleteRow(event) {
    this.projetDelete = event;
  } 
   delete(){
  let index = this.projetsTunis.indexOf(this.projetDelete);
  this.projetsTunis.splice(index,1);
  this.projetService.deleteProjet(this.projetDelete._id).subscribe(
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


import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Agence } from 'src/app/models/agence';
import { AgenceService } from 'src/app/service/agence.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-agence',
  templateUrl: './update-agence.component.html',
  styleUrls: ['./update-agence.component.css']
})
export class UpdateAgenceComponent implements OnInit {

  id:any;
   agence :any;
  
  constructor(  private service:AgenceService,private router:Router,private route:ActivatedRoute, 
    private location: Location , @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
   
    this.agence=new Agence();
   if( this.id=this.route.snapshot.params['id']){
    this.service.getAgenceById(this.id).subscribe(
      data=>{console.log(data)
      this.agence=data;
            },
      error=>console.log(error));
      

  }}
  
   onModif(){
     this.service.updateAgence(this.data.id,this.data.agence).subscribe(
    data=>console.log(data),error=>console.error());
    this.agence=new Agence();
   // this.router.navigate(['/updatedirection']);
  }
  opensweetalert(){
    Swal.fire({
      title:'Êtes-vous sûre?',
      text: "Vous ne pourrez pas récupérer ce fichier imaginaire?",
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'oui,modifiez-le!',
      cancelButtonText:'Non,gardez-le'
        
    }).then((result) => {
      console.log(result)
      if(result.isConfirmed){
        this.onModif();
      }
      if (result.value) {
        Swal.fire(
          'modifié!',
          'Votre fichier imaginaire a été modifié',
          'success'
        )
      window.location.reload()
      }else if (result.dismiss==Swal.DismissReason.cancel){
      Swal.fire(
        'Annulé',
        'Votre fichier imaginaire est en sécurité :)',
        'error'
      )

      }
    })
 

  }
  retour(){
    window.location.reload()
  }
}

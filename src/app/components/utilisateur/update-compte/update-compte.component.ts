import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { switchAll } from 'rxjs/operators';
import { Location } from '@angular/common'
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegistrationService } from 'src/app/service/registration.service';
import { Compte } from 'src/app/models/compte';


@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {
   id :any;
   compte : any;
  constructor(private _service:RegistrationService,private _router:Router,private route:ActivatedRoute
   , private location: Location , @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    this.compte=new Compte();
  if(  this.id=this.route.snapshot.params['id']){
    this._service.getCompteById(this.id).subscribe(
      data=>{console.log(data)
      this.compte=data;},
      error=>console.log(error));
  }}
  enregCompte(){
    
    this._service.updateCompte(this.data.id,this.data.compte).subscribe(
      data=>console.log(data),error=>console.error());
      this.compte=new Compte();
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
        this.enregCompte();
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

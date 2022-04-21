import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Compte } from 'src/app/models/compte';
import { RegistrationService } from 'src/app/service/registration.service';


@Component({
  selector: 'app-compte-utilisateur',
  templateUrl: './compte-utilisateur.component.html',
  styleUrls: ['./compte-utilisateur.component.css']
})
export class CompteUtilisateurComponent implements OnInit {
  compte=new Compte();
  //em:string="";
  msg='';
  productForm !: FormGroup;
  
  constructor(private _service:RegistrationService,private _router:Router,private formBuilder : FormBuilder) { }
  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      id:['',Validators.required],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      email:['',Validators.required, Validators.email],
      direction:['',Validators.required],
      password : ['', Validators.required],

    })
  }
  
  enregCompte(){     
      this._service.registrerCompteFromRemote(this.compte).subscribe(     
        data =>{
        console.log("reponse received");  
       },
       error =>{
         console.log("exception occured");
         this.msg=error.error;
       }
    )
  }
 
  retourner(){
    this._router.navigate(['/gestion-parametrages']);
  }
  email:any;
  exist:boolean=false;
  
  opensweetalert(){ 
    console.log(this.compte.email);

    /* this._service.findByEmail(email).subscribe(
  
      
      )
*/
         
    if(!this.exist){
     this.enregCompte();
       Swal.fire(
          'crée!',
          'Votre Compte a été crée :)',
          'success'
         ).then( result => {
          console.log(result);
          if(result.isConfirmed ){
            this.compte.nom = "";
            this.compte.prenom = "";       
            this.compte.direction = ""; 
            this.compte.email=""; 
            this.compte.password =""; 
          }
        })
       

      }else 
      Swal.fire(
        'Annulé',
        'Votre adresse e-mail est déja existe :(',
        'error'
          ).then( result => {
            console.log(result);
            if(result.isConfirmed ){
              this.retourner();
            }
          })
      }//))        
      ;
  //}
  retour(){
    window.location.reload()
  }
}





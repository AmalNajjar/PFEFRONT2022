import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Compte } from 'src/app/models/compte';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-delete-compte',
  templateUrl: './delete-compte.component.html',
  styleUrls: ['./delete-compte.component.css']
})
export class DeleteCompteComponent implements OnInit {
  comptes:any;
  id!:number 
  compte=new Compte();
  constructor(private service:RegistrationService,private _router:Router,private route:ActivatedRoute,private location: Location, @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void  {
    this.compte = this.data.compte;
  if ( this.id=this.route.snapshot.params['id']){
    this.compte=new Compte();
    this.service.getCompteById(this.id).subscribe(
      data=>{ console.log(data);
               this.compte=data;
      },
      error=>console.log(error)
      )
  }}

  deleteCompte(id:number){
    console.log(id);    
    this.service.deleteCompte(id).subscribe(
      data=>{
        console.log(data);
        this.comptes=this.service.getComptes();
      },
      error=>console.error(error)
      );  
    
      window.location.reload()
     
 } 


 return(){
 }
}
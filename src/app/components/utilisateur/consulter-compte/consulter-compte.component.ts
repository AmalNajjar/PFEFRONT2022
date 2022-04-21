import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Compte } from 'src/app/models/compte';
import { RegistrationService } from 'src/app/service/registration.service';


@Component({
  selector: 'app-consulter-compte',
  templateUrl: './consulter-compte.component.html',
  styleUrls: ['./consulter-compte.component.css']
})
export class ConsulterCompteComponent implements OnInit {
  id!:number 
  compte=new Compte();
   
  constructor(private _service:RegistrationService,private _router:Router,private route:ActivatedRoute ,@Inject(MAT_DIALOG_DATA) public data : any) { 
  }
  ngOnInit(): void {
   if( this.id=this.route.snapshot.params['id']){
    this.compte=new Compte();
    this._service.getCompteById(this.id).subscribe(
      data=>{ console.log(data);
               this.compte=data;
      },
      error=>console.log(error)
      )
  }}
  

}


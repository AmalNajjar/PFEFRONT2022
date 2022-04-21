import { Direction } from '@angular/cdk/bidi';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
 
import { AgenceService } from 'src/app/service/agence.service';
import { Location } from '@angular/common';
import { Agence } from 'src/app/models/agence';
@Component({
  selector: 'app-delete-agence',
  templateUrl: './delete-agence.component.html',
  styleUrls: ['./delete-agence.component.css']
})
export class DeleteAgenceComponent implements OnInit {

  id!:number
  agences:any;
 agence=new Agence;
  constructor(private location: Location,private service:AgenceService,
    private route: ActivatedRoute,private router: Router, @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    this.agence = this.data.agence;
    if(this.id=this.route.snapshot.params['id']){
    this.agence=new Agence();
    this.service.getAgenceById(this.id).subscribe(
      data=>{ console.log(data);
               this.agence=data;
      },
      error=>console.log(error)
      )
  }}
  deleteAgence(id: number){
    console.log(id);
      this.service.deleteAgence(id).subscribe(
        data=>{
          console.log(data);
          this.agences=this.service.getAgences;
          //this.router.navigate(['deletedirection  ',id]);
        },
        error=>console.error(error));
        window.location.reload()
     
    }
    return(){
    } 
  }





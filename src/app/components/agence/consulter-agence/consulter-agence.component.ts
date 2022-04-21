
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Agence } from 'src/app/models/agence';
import { AgenceService } from 'src/app/service/agence.service';




@Component({
  selector: 'app-consulter-agence',
  templateUrl: './consulter-agence.component.html',
  styleUrls: ['./consulter-agence.component.css']
})
export class ConsulterAgenceComponent implements OnInit {
  id!:number 
  agence=new Agence();
  constructor(private service:AgenceService,private route: ActivatedRoute,
    private router: Router,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    if(this.id=this.route.snapshot.params['id']){
    this.agence=new Agence();
    this.service.getAgenceById(this.id).subscribe(
      data=>{ console.log(data);
               this.agence=data;
      },
      error=>console.log(error)
      )
  }

  }}

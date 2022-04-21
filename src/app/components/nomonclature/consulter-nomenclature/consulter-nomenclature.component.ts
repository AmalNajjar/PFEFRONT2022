import { Direction } from '@angular/cdk/bidi';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Nomenclature } from 'src/app/models/nomenclature';
import { NomenclatureService } from 'src/app/service/nomenclature.service';

@Component({
  selector: 'app-consulter-nomenclature',
  templateUrl: './consulter-nomenclature.component.html',
  styleUrls: ['./consulter-nomenclature.component.css']
})
export class ConsulterNomenclatureComponent implements OnInit {

  id!:number 
  nomenclature=new Nomenclature();
  constructor(private service:NomenclatureService,private route: ActivatedRoute,
    private router: Router,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    if(this.id=this.route.snapshot.params['id']){
    this.nomenclature=new Nomenclature();
    this.service.getNomenclatureById(this.id).subscribe(
      data=>{ console.log(data);
               this.nomenclature=data;
      },
      error=>console.log(error)
      )
  }
  }}

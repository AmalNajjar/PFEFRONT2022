import { Direction } from '@angular/cdk/bidi';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Nomenclature } from 'src/app/models/nomenclature';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-delete-nomenclature',
  templateUrl: './delete-nomenclature.component.html',
  styleUrls: ['./delete-nomenclature.component.css']
})
export class DeleteNomenclatureComponent implements OnInit {
  id!:number
  nomenclatures:any;
  nomenclature=new  Nomenclature();
  constructor(private location: Location,private service:NomenclatureService,
    private route: ActivatedRoute,private router: Router, @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    this.  nomenclature = this.data. nomenclature;
    if(this.id=this.route.snapshot.params['id']){
    this. nomenclature=new Nomenclature();
    this.service.getNomenclatureById(this.id).subscribe(
      data=>{ console.log(data);
               this. nomenclature=data;
      },
      error=>console.log(error)
      )
  }}
  deleteNomenclature(id: number){
    console.log(id);
      this.service.deleteNomenclatures(id).subscribe(
        data=>{
          console.log(data);
          this. nomenclatures=this.service.getNomenclatures();
          //this.router.navigate(['deletedirection  ',id]);
        },
        error=>console.error(error));
        window.location.reload()
     
    }
    return(){
    } 

}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { StructureService } from 'src/app/service/structure.service';
import { Structure } from 'src/app/models/structure';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-structure',
  templateUrl: './delete-structure.component.html',
  styleUrls: ['./delete-structure.component.css']
})
export class DeleteStructureComponent implements OnInit {

  structures:any;
  id!:number ;
  structure= new Structure();
  constructor(private _service:StructureService,private _router:Router,private route:ActivatedRoute,private location: Location, @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void  {
    this.structure = this.data.structure;
  if ( this.id=this.route.snapshot.params['id']){
      this.structure= new Structure();
    this._service.getStructureById(this.id).subscribe(
      data=>{ console.log(data);
               this.structure=data;
      },
      error=>console.log(error)
      )
  }}

  deleteStructure(id:number){
    console.log(id);    
    this._service.deleteStructure(id).subscribe(
      data=>{
        console.log(data);
        this.structures=this._service.getStructures();
      },
      error=>console.error(error)
      );  
    
      window.location.reload()
     
 } 

 return(){
 }
}

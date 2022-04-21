import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { StructureService } from 'src/app/service/structure.service';
import { Structure } from 'src/app/models/structure';

@Component({
  selector: 'app-consulter-structure',
  templateUrl: './consulter-structure.component.html',
  styleUrls: ['./consulter-structure.component.css']
})
export class ConsulterStructureComponent implements OnInit {

  id!:number 
  structure= new Structure();
  constructor(private _service:StructureService,private _router:Router,private route:ActivatedRoute ,@Inject(MAT_DIALOG_DATA) public data : any) { 
  }
  ngOnInit(): void {
   if( this.id=this.route.snapshot.params['id']){
    this.structure= new Structure();
    this._service.getStructureById(this.id).subscribe(
      data=>{ console.log(data);
               this.structure=data;
      },
      error=>console.log(error)
      )
  }
  console.log(this.structure);
}
  

}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Direction } from 'src/app/models/direction';
import { DirectionService } from 'src/app/service/direction.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-consulter-direction',
  templateUrl: './consulter-direction.component.html',
  styleUrls: ['./consulter-direction.component.css']
})
export class ConsulterDirectionComponent implements OnInit {
 //direction:Direction=new Direction;;
 id!:number 
  direction=new Direction();
  constructor(private service:DirectionService,private route: ActivatedRoute,
    private router: Router,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    if(this.id=this.route.snapshot.params['id']){
    this.direction=new Direction();
    this.service.getDirectionById(this.id).subscribe(
      data=>{ console.log(data);
               this.direction=data;
      },
      error=>console.log(error)
      )
  }}
  




















  }
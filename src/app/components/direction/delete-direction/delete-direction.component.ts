import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Direction } from 'src/app/models/direction';
import { DirectionService } from 'src/app/service/direction.service';
import { Location } from '@angular/common';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-direction',
  templateUrl: './delete-direction.component.html',
  styleUrls: ['./delete-direction.component.css']
})
export class DeleteDirectionComponent implements OnInit {
  id!:number
  directions:any;
  direction=new Direction();
  constructor(private location: Location,private service:DirectionService,
    private route: ActivatedRoute,private router: Router, @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    this.direction = this.data.direction;
    if(this.id=this.route.snapshot.params['id']){
    this.direction=new Direction();
    this.service.getDirectionById(this.id).subscribe(
      data=>{ console.log(data);
               this.direction=data;
      },
      error=>console.log(error)
      )
  }}
  deleteDirection(id: number){
    console.log(id);
      this.service.deleteDirection(id).subscribe(
        data=>{
          console.log(data);
          this.directions=this.service.getDirections();
          //this.router.navigate(['deletedirection  ',id]);
        },
        error=>console.error(error));
        window.location.reload()
     
    }
    return(){
    } 
  }



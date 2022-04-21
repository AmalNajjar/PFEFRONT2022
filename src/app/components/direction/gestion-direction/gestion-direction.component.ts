
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


import { DirectionService } from 'src/app/service/direction.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CreedirectionComponent } from '../creedirection/creedirection.component';
import { UpdateDirectionComponent } from '../update-direction/update-direction.component';
import { AuthService } from 'src/app/service/auth.service';
import { ConsulterDirectionComponent } from '../consulter-direction/consulter-direction.component';
import { DeleteDirectionComponent } from '../delete-direction/delete-direction.component';
import { LieuArchive } from 'src/app/models/lieu-archive';
import { TypeDirection } from 'src/app/models/type-direction';

@Component({
  selector: 'app-gestion-direction',
  templateUrl: './gestion-direction.component.html',
  styleUrls: ['./gestion-direction.component.css']
})
export class GestionDirectionComponent implements OnInit {
  //direction=new Direction();
  
  directions:any;
  dir:any;
 
  displayedColumns: string[] = ['id', 'libelleDirection', 'codedirection', 'typeDirection','lieu_d_archivage_1_ere_age','lieu_d_archivage_2_eme_age','action'];
 dataSource!: MatTableDataSource<any>;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
 
 types:TypeDirection[]=[];
 lieux: LieuArchive []=[];
 
  
  constructor(private dialog:MatDialog,public authService: AuthService,   private service:DirectionService,private _router:Router) { }

  ngOnInit(): void {
   

 this.service.getDirections().subscribe(
    data=>{ console.log("response received");
    this.dataSource=new MatTableDataSource(data) ;
               this.dataSource.paginator=this.paginator;
               this.dataSource.sort=this.sort
             
    },
    error=>console.log("exception occured")
  )
    }
  

updateDirection(id:number){
  
    this._router.navigate(['updatedirection',id]);
  }
  
 

consulterDirection(id:number){
  this._router.navigate(['consulterdirection',id]);
 }
 deleteDirection(id: number){
  this._router.navigate(['deletedirection',id]);}
  openDialog() {
    this.dialog.open(CreedirectionComponent, {
     width:'35%'
    });
  }

  openDialogg(item : any) { 

    this.dialog.open(DeleteDirectionComponent, {
      width:'45%',
      data : {
        direction: item
      }
    });   
  }

  
  openDialoggg(item : any) {  
    this.dialog.open(ConsulterDirectionComponent, {
      width:'45%',
      data : {
        direction : item
      }
    });
  }

    openDialogggg(item : any) {  
      this.dialog.open(UpdateDirectionComponent, {
        width:'45%',
        data : {
          direction : item
        }
      });

    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
}
 


 

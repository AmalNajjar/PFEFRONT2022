import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { AgenceService } from 'src/app/service/agence.service';

import { ConsulterAgenceComponent } from '../consulter-agence/consulter-agence.component';
import { CreeAgenceComponent } from '../cree-agence/cree-agence.component';
import { DeleteAgenceComponent } from '../delete-agence/delete-agence.component';
import { UpdateAgenceComponent } from '../update-agence/update-agence.component';

@Component({
  selector: 'app-gestion-agence',
  templateUrl: './gestion-agence.component.html',
  styleUrls: ['./gestion-agence.component.css']
})
export class GestionAgenceComponent implements OnInit {

  agences:any;
  agen:any;
  searchValue!:string;
  displayedColumns: string[] = ['id', 'codeAgence', 'libelleAgence','lieu_d_archivage_1_ere_age','lieu_d_archivage_2_eme_age','action'];
 dataSource!: MatTableDataSource<any>;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
 
 
  
 
  
  constructor(private dialog:MatDialog,   private service:AgenceService,private _router:Router) { }

  ngOnInit(): void {
   

 this.service.getAgences().subscribe(
  data=>{ console.log("response recieved");
  this.dataSource=new MatTableDataSource(data) ;
  this.dataSource.paginator=this.paginator;
  this.dataSource.sort=this.sort
},
error=>console.log("exception occured")

)
    }
  

updateAgence(id:number){
  
    this._router.navigate(['updateagence',id]);
  }
  
 

consulterAgence(id:number){
  this._router.navigate(['consulteragence',id]);
 }
 deleteAgence(id: number){
  this._router.navigate(['deleteagence',id]);}
  openDialog() {
    this.dialog.open(CreeAgenceComponent, {
     width:'35%'
    });
  }

  openDialogg(item : any) { 

    this.dialog.open(DeleteAgenceComponent, {
      width:'45%',
      data : {
        agence: item
      }
    });   
  }

  
  openDialoggg(item : any) {  
    this.dialog.open(ConsulterAgenceComponent, {
      width:'45%',
      data : {
        agence : item
      }
    });
  }

    openDialogggg(item : any) {  
      this.dialog.open(UpdateAgenceComponent, {
        width:'45%',
        data : {
          agence : item
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
 


 



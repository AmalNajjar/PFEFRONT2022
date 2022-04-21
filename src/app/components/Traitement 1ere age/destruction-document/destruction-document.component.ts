import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { SuiviDocument } from 'src/app/models/suivi-document';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { AjoutDateDestructionComponent } from '../ajout-date-destruction/ajout-date-destruction.component';


@Component({
  selector: 'app-destruction-document',
  templateUrl: './destruction-document.component.html',
  styleUrls: ['./destruction-document.component.css']
})
export class DestructionDocumentComponent implements OnInit {
  doc:SuiviDocument[]=[];
 suividocument=new SuiviDocument()
  searchValue!:string;
 
  displayedColumns: string[] = ['id','chapitre_comptable','code','numero','date_De_creation_Du_Document','dateDestruction','libelle','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 constructor(private service:SuiviDocumentService,private _router:Router,private dialog:MatDialog) { }

 ngOnInit(): void {
   this.service.getDocuments().subscribe(
   data=>{ console.log("response recieved");
            this.dataSource=new MatTableDataSource(data) ;
            this.dataSource.paginator=this.paginator;
            this.dataSource.sort=this.sort
   },
   error=>console.log("exception occured")
   
   )
   }
  
 
 openDialog() {
   this.dialog.open(AjoutDateDestructionComponent, {
    width:'35%'
   });
 }

 
/*
 openDialogg(item : any) { 

   this.dialog.open(DeleteStructureComponent, {
     width:'41%',
     data : {
       structure : item
     }
   });   
 }

 
 openDialoggg(item : any) {  
   this.dialog.open(ConsulterStructureComponent, {
     width:'41%',
     data : {
       structure : item
     }
   });
 }

   openDialogggg(item : any) {  
     this.dialog.open(UpdateStructureComponent, {
       width:'45%',
       data : {
         structure : item
       }
     });

   }*/
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }
 
}

function AjouteDateDestructionComponent(AjouteDateDestructionComponent: any, arg1: { width: string; }) {
  throw new Error('Function not implemented.');
}

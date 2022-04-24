import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SuiviDocument } from 'src/app/models/suivi-document';

import { SuiviDocumentService } from 'src/app/service/suivi-document.service';


@Component({
  selector: 'app-inventaire-document2emeage',
  templateUrl: './inventaire-document2emeage.component.html',
  styleUrls: ['./inventaire-document2emeage.component.css']
})
export class InventaireDocument2emeageComponent implements OnInit {
  Datedeversemnent2emeage:any;
  LocalDate:String=new Date().toLocaleString();
  doc:SuiviDocument[]=[];
 suividocument=new SuiviDocument()
  searchValue!:string;
 
  displayedColumns: string[] = ['id','chapitre_comptable','numero_document','nombre_De_pages','date_De_creation_Du_Document','date_d_entree_Du_Document','codedocument','numero_d_ordre','emplacement_physique','nombre_De_documents','Datedeversemnent2emeage','limite_de_conservation_1ere_age','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service:SuiviDocumentService,private _router:Router,private dialog:MatDialog) { }


 ngOnInit(): void {
  console.log(this.data)
  this.dataSource=this.data
   }
   getdate(){
    this.LocalDate=new Date().toLocaleString();
    this.Datedeversemnent2emeage=this.LocalDate;
  
    }

    
    openDialog(){
      
  
    }
     
    }
  
     



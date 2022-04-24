import { Component, OnInit, ViewChild } from '@angular/core';

import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { Router } from '@angular/router';

import { CreeDocumentComponent } from '../cree-document/cree-document.component';
import { MatDialog } from '@angular/material/dialog';
import { FicheDeRenseignementComponent } from '../fiche-de-renseignement/fiche-de-renseignement.component';

import { DestructionDocumentComponent } from '../destruction-document/destruction-document.component';
import { InventaireDocument2emeageComponent } from '../inventaire-document2emeage/inventaire-document2emeage.component';
import { SuiviDocument } from 'src/app/models/suivi-document';
@Component({
  selector: 'app-tri-document',
  templateUrl: './tri-document.component.html',
  styleUrls: ['./tri-document.component.css']
})
export class TriDocumentComponent implements OnInit {

  doc:SuiviDocument[]=[];
  sortedData:SuiviDocument[];
 suividocument=new SuiviDocument()
  displayedColumns: string[] = ['id','chapitre_comptable','numero_document','nombre_De_pages','date_De_creation_Du_Document','date_d_entree_Du_Document','codedocument','numero_d_ordre','emplacement_physique','nombre_De_documents','limite_de_conservation_1ere_age','LibelleDirection','designation_Nomenclature','Destruction'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  constructor(private _router:Router,private service:SuiviDocumentService,private dialog:MatDialog) {
    this.sortedData=this.doc.slice();
   }

  ngOnInit(): void {
    this.service.getDocuments().subscribe(

    data=>{ console.log("received response");
    this.dataSource=new MatTableDataSource(data) ;
               //this.dataSource.paginator=this.paginator;
              // this.dataSource.sort=this.sort
             this.doc=data;
             this.sortedData=this.doc.slice();
             console.log("slice",this.doc.slice());
    },
    error=>console.log("exception occured")

    )
    this.sortedData=this.doc.slice();
    console.log("hello",this.sortedData);
    }



    openDialoggg(item : any) { 
      console.log(item);
      this.dialog.open(DestructionDocumentComponent, {
        width:'62%',
        height:'62%',
        data : [item]
      });   
    }
    openDialogggg(item : any) { 
      console.log(item);
      this.dialog.open(InventaireDocument2emeageComponent, {
        width:'77%',
        height:'70%',
        data : [item]
        });
      }   

    sortData(sort: Sort) {
    const data = this.doc.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'chapitre_comptable':
          return compare(a.chapitre_comptable, b.chapitre_comptable, isAsc);
        case 'nombre_De_documents':
          return compare(a.nombre_De_documents, b.nombre_De_documents, isAsc);
        case 'nombre_De_pages':
          return compare(a.nombre_De_pages, b.nombre_De_pages, isAsc);
        case 'numero_document':
          return compare(a.numero_document, b.numero_document, isAsc);


          case 'date_d_entree_Du_Document':
            return compare(a.date_d_entree_Du_Document, b.date_d_entree_Du_Document, isAsc);
          case 'date_De_creation_Du_Document':
            return compare(a.date_De_creation_Du_Document, b.date_De_creation_Du_Document, isAsc);
          case 'limite_de_conservation_1ere_age':
            return compare(a.limite_de_conservation_1ere_age, b.limite_de_conservation_1ere_age, isAsc);

        default:
          return 0;
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
  openDialog() {
    this.dialog.open(CreeDocumentComponent, {
     width:'35%'
    });
  }
 
}
function compare(a: number | string|Date, b: number | string|Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
  






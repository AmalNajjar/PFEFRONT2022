import { Component, OnInit, ViewChild } from '@angular/core';

import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { Router } from '@angular/router';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { CreeDocumentComponent } from '../cree-document/cree-document.component';
import { MatDialog } from '@angular/material/dialog';
import { FicheDeRenseignementComponent } from '../fiche-de-renseignement/fiche-de-renseignement.component';
import { Nomenclature } from 'src/app/models/nomenclature';
import { Direction } from 'src/app/models/direction';
import { DestructionDocumentComponent } from '../destruction-document/destruction-document.component';
@Component({
  selector: 'app-tri-document',
  templateUrl: './tri-document.component.html',
  styleUrls: ['./tri-document.component.css']
})
export class TriDocumentComponent implements OnInit {
  
  doc:SuiviDocument[]=[];
  sortedData:SuiviDocument[];
 suividocument=new SuiviDocument()
 nomenclatures:Nomenclature []=[];
 direction: Direction []=[];
  displayedColumns: string[] = ['id','chapitre_comptable','numero_document','nombre_De_pages','date_De_creation_Du_Document','date_d_entree_Du_Document','nombre_De_documents','limite_de_conservation_1ere_age','Destruction'];
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
      this.dialog.open(DestructionDocumentComponent, {
        width:'62%',
        data : {
          suividocument : item
        }
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
  ficherenseignament(id:number){
    this._router.navigate(['fiche',id]);
   }
  openDialogg() {  
    this.dialog.open(FicheDeRenseignementComponent, {
      width:'45%',
      
    });
  }
 

}
function compare(a: number | string|Date, b: number | string|Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
  /*displayedColumns: string[] = ['id','Numero_document', 'Chapitre_comptable', 'Nombre_De_pages', 'Date_De_creation_Du_Document','Date_d_entree_Du_Document',' Nombre_De_documents','limite_de_conservation_1ere_age'];

  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
   constructor(private _liveAnnouncer: LiveAnnouncer,private service:SuiviDocumentService) {}

   @ViewChild(MatSort) sort!: MatSort;

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
  announceSortChange(sortState: Sort) {
    
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }*/






import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { ConsulterSortieDocComponent } from './consulter-sortie-doc/consulter-sortie-doc.component';
import { CreeSortiedocComponent } from './cree-sortiedoc/cree-sortiedoc.component';
import { ModifierSortieDocComponent } from './modifier-sortie-doc/modifier-sortie-doc.component';

@Component({
  selector: 'app-inscription-sortie-doc',
  templateUrl: './inscription-sortie-doc.component.html',
  styleUrls: ['./inscription-sortie-doc.component.css']
})
export class InscriptionSortieDocComponent implements OnInit {
  nomenclatures:any;
  nomen:any;
   searchValue!:string;
   displayedColumns: string[] = ['id','chapitre_comptable','nombre_De_pages','date_De_creation_Du_Document','libelleDirection','designation_Nomenclature','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog:MatDialog,private service:SuiviDocumentService,private _router:Router) { }

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
  updateDocument(id:number){
  
    this._router.navigate(['modifierSortie1ere',id]);
  }
  
 

consulterDocument(id:number){
  this._router.navigate(['ConsulterSortie1ere',id]);
 }
  
  openDialog() {
    this.dialog.open(CreeSortiedocComponent, {
     width:'35%'
    });
  }


  
  openDialoggg(item : any) {  
    this.dialog.open(ConsulterSortieDocComponent, {
      width:'45%',
      data : {
        sortie: item
      }
    });
  }

    openDialogggg(item : any) {  
      this.dialog.open(ModifierSortieDocComponent, {
        width:'45%',
        data : {
         sortie : item
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StructureService } from 'src/app/service/structure.service';
import { TraiterDemandeComponent } from '../traiter-demande/traiter-demande.component';

@Component({
  selector: 'app-liste-demande-versement',
  templateUrl: './liste-demande-versement.component.html',
  styleUrls: ['./liste-demande-versement.component.css']
})
export class ListeDemandeVersementComponent implements OnInit {
  searchValue!:string;
 
  displayedColumns: string[] = ['date_dde','objet','nbrCarton','etat','action'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:StructureService ,private _router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.getStructures().subscribe(
      data=>{ console.log("response recieved");
               this.dataSource=new MatTableDataSource(data) ;
               this.dataSource.paginator=this.paginator;
               this.dataSource.sort=this.sort
      },
      error=>console.log("exception occured")
      
      )
  }

  openDialogggg(item : any) {  
    this.dialog.open(TraiterDemandeComponent, {
      width:'45%',
      data : {
        structure : item
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

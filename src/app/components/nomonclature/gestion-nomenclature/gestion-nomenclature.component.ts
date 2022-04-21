import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import { ConsulterNomenclatureComponent } from '../consulter-nomenclature/consulter-nomenclature.component';
import { CreeNomenclatureComponent } from '../cree-nomenclature/cree-nomenclature.component';
import { DeleteNomenclatureComponent } from '../delete-nomenclature/delete-nomenclature.component';
import { UpdateNomenclatureComponent } from '../update-nomenclature/update-nomenclature.component';

@Component({
  selector: 'app-gestion-nomenclature',
  templateUrl: './gestion-nomenclature.component.html',
  styleUrls: ['./gestion-nomenclature.component.css']
})
export class GestionNomenclatureComponent implements OnInit {

  nomenclatures:any;
 nomen:any;
  searchValue!:string;
  displayedColumns: string[] = ['id', 'code_Nomenclature', 'designation_Nomenclature', 'dureeConservation_1ereAge','dureeConservation_2emeAge','valeurHistorique_3emeAge','action'];
 dataSource!: MatTableDataSource<any>;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
 
 
  
 
  
  constructor(private dialog:MatDialog,   private service:NomenclatureService,private _router:Router) { }

  ngOnInit(): void {
   

 this.service.getNomenclatures().subscribe(
    data=>{ console.log("response recieved");
    this.dataSource=new MatTableDataSource(data) ;
               this.dataSource.paginator=this.paginator;
               this.dataSource.sort=this.sort
             
    },
    error=>console.log("exception occured")
  )
    }
  

updateNomenclature(id:number){
  
    this._router.navigate(['nomenclature',id]);
  }
  
 

consulterNomenclature(id:number){
  this._router.navigate(['consulternomenclature',id]);
 }
 deleteNomenclature(id: number){
  this._router.navigate(['deletenomenclature',id]);}
  openDialog() {
    this.dialog.open(CreeNomenclatureComponent, {
     width:'35%'
    });
  }

  openDialogg(item : any) { 

    this.dialog.open(DeleteNomenclatureComponent, {
      width:'45%',
      data : {
       nomenclature: item
      }
    });   
  }

  
  openDialoggg(item : any) {  
    this.dialog.open(ConsulterNomenclatureComponent, {
      width:'45%',
      data : {
        nomenclature : item
      }
    });
  }

    openDialogggg(item : any) {  
      this.dialog.open(UpdateNomenclatureComponent, {
        width:'45%',
        data : {
          nomenclature : item
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

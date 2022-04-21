import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StructureService } from 'src/app/service/structure.service';
 import { ConsulterStructureComponent } from '../consulter-structure/consulter-structure.component';
import { CreerStructureComponent } from '../creer-structure/creer-structure.component';
import { DeleteStructureComponent } from '../delete-structure/delete-structure.component';
import { UpdateStructureComponent } from '../update-structure/update-structure.component';

@Component({
  selector: 'app-gestion-structure',
  templateUrl: './gestion-structure.component.html',
  styleUrls: ['./gestion-structure.component.css']
})
export class GestionStructureComponent implements OnInit {

  //compt:any;
 //comptes:any;
  //prenom!:string;
  searchValue!:string;
 
  displayedColumns: string[] = ['id','code','libelle','lieu_archivage1ereAge','lieu_archivage2emeAge','action'];
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
  
  updateStructure(id:number){
    this._router.navigate(['update-structure',id]);
  }
 consulterStructure(id:number){
   this._router.navigate(['consulter-structure',id]);
  }
  deleteStructure(id:number){
   this._router.navigate(['delete-structure',id]);
  }
 
 openDialog() {
   this.dialog.open(CreerStructureComponent, {
    width:'35%'
   });
 }

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

   }
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }
 
}



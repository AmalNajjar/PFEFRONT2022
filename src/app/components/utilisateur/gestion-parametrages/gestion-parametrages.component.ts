import { Component, OnInit, ViewChild} from '@angular/core';

import { Router } from '@angular/router';
 import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CompteUtilisateurComponent } from '../compte-utilisateur/compte-utilisateur.component';
import { DeleteCompteComponent } from '../delete-compte/delete-compte.component';
import { ConsulterCompteComponent } from '../consulter-compte/consulter-compte.component';
import { UpdateCompteComponent } from '../update-compte/update-compte.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { RegistrationService } from 'src/app/service/registration.service';




@Component({
  selector: 'app-gestion-parametrages',
  templateUrl: './gestion-parametrages.component.html',
  styleUrls: ['./gestion-parametrages.component.css']
})
export class GestionParametragesComponent implements OnInit {
   compt:any;
   comptes:any;
   prenom!:string;
   searchValue!:string;
  
   displayedColumns: string[] = ['id', 'nom', 'prenom','password','email', 'direction','action'];
   dataSource!: MatTableDataSource<any>;
 
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:RegistrationService,private _router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.getComptes().subscribe(
    data=>{ console.log("response recieved");
             this.dataSource=new MatTableDataSource(data) ;
             this.dataSource.paginator=this.paginator;
             this.dataSource.sort=this.sort
    },
    error=>console.log("exception occured")
    
    )
    }
   
   updateCompte(id:number){
     this._router.navigate(['update-compte',id]);
   }
   consulterCompte(id:number){
    this._router.navigate(['consulter-compte',id]);
  }
  deleteCompte(id:number){
    this._router.navigate(['delete-compte',id]);
  }
  
  openDialog() {
    this.dialog.open(CompteUtilisateurComponent, {
     width:'35%'
    });
  }

  openDialogg(item : any) { 

    this.dialog.open(DeleteCompteComponent, {
      width:'41%',
      data : {
        compte : item
      }
    });   
  }

  
  openDialoggg(item : any) {  
    this.dialog.open(ConsulterCompteComponent, {
      width:'41%',
      data : {
        compte : item
      }
    });
  }

    openDialogggg(item : any) {  
      this.dialog.open(UpdateCompteComponent, {
        width:'45%',
        data : {
          compte : item
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



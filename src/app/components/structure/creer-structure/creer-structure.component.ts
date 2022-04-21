import { Component, Input , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StructureService } from 'src/app/service/structure.service';
import { Structure } from 'src/app/models/structure';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { LieuArchive } from 'src/app/models/lieu-archive';

@Component({
  selector: 'app-creer-structure',
  templateUrl: './creer-structure.component.html',
  styleUrls: ['./creer-structure.component.css']
})
export class CreerStructureComponent implements OnInit {
  
  structure= new Structure();
  //em:string="";
   msg='';
  productForm !: FormGroup;
  lieux!:LieuArchive[];
  

  constructor(private location:Location , private _service:StructureService,private _router:Router,private formBuilder : FormBuilder) { }
  ngOnInit(): void {
   
    this.getLieu();
  }
  
 
 public enregStructure(){     
      let variable={
      code:this.structure.code,
      libelle:this.structure.libelle,
      lieu_archivage1ereAge:{id:4,lieu:"Bab El -Oued",code:1},
      lieu_archivage2emeAge:{id:1,lieu:"Bureau",code:3}
      }
       
      this._service.getLieuById(this.structure.lieu_archivage1ereAge).subscribe(
       res=>{variable.lieu_archivage1ereAge.id=res.id; 
        variable.lieu_archivage1ereAge.lieu=res.lieu ; 
        variable.lieu_archivage1ereAge.code=res.code; 
        console.log("aff1",variable);

        this._service.getLieuById(this.structure.lieu_archivage2emeAge).subscribe(
          res=>{variable.lieu_archivage2emeAge.id=res.id;
            variable.lieu_archivage2emeAge.lieu=res.lieu ;
            variable.lieu_archivage2emeAge.code=res.code; 
             console.log("aff2",variable);
             this._service.registrerCompteFromRemoteS(variable).subscribe(     
      
              data =>{
              console.log("reponse received");  
             },
             error =>{
               console.log("exception occured");
               this.msg=error.error;
             }
          )


            }

         )
      }
      
      )  
       console.log("hiiii",this.structure);
       console.log(variable);
   
  }
 

  getLieu(){
  this._service.getLieu().subscribe(
  res=>this.lieux=res
  )
  }
 
  opensweetalert(){    
    console.log(this.structure.code);    
       Swal.fire(
          'crée!',
          'Votre Compte a été crée :)',
          'success'
         ).then( result => {
          console.log(result);
          if(result.isConfirmed ){
            this.structure.code = "";
            this.structure.libelle = "";       
           /* this.structure.lieu_archivage1ereAge=""; 
            this.structure.lieu_archivage2emeAge=""; */
          }
        })
  }
  retour(){
    window.location.reload()
  }
}




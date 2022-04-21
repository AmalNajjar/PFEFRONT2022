import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AgenceService } from 'src/app/service/agence.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common'
import { Agence } from 'src/app/models/agence';
import { LieuArchive } from 'src/app/models/lieu-archive';
 


@Component({
  selector: 'app-cree-agence',
  templateUrl: './cree-agence.component.html',
  styleUrls: ['./cree-agence.component.css']
})
export class CreeAgenceComponent implements OnInit {

  agence=new Agence();
  msg='';
  productForm !: FormGroup; 
  lieux!:LieuArchive[];
  constructor(   private location: Location,
    private _service:AgenceService,private formBuilder : FormBuilder,private router: Router) { }
  ngOnInit(): void {

this.getLieu();





  }
 public  onSubmit(){ 
  let variable={
    codeAgence:this.agence.codeAgence,
    libelleAgence:this.agence.libelleAgence,
    lieu_d_archivage_1_ere_age:{id:4,lieu:"Bab El -Oued",code:1},
    lieu_d_archivage_2_eme_age:{id:1,lieu:"Bureau",code:3}
    }
     
    this._service.getLieuById(this.agence.lieu_d_archivage_1_ere_age).subscribe(
     res=>{variable.lieu_d_archivage_1_ere_age.id=res.id; 
      variable.lieu_d_archivage_1_ere_age.lieu=res.lieu ; 
      variable.lieu_d_archivage_1_ere_age.code=res.code; 
      console.log("aff1",variable);

      this._service.getLieuById(this.agence.lieu_d_archivage_2_eme_age).subscribe(
        res=>{variable.lieu_d_archivage_2_eme_age.id=res.id;
          variable.lieu_d_archivage_2_eme_age.lieu=res.lieu ;
          variable.lieu_d_archivage_2_eme_age.code=res.code; 
           console.log("aff2",variable);
           this._service.createAgence(variable).subscribe(     
    
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
     console.log("hiiii",this.agence);
     console.log(variable);
      
      }
      getLieu(){
        this._service.getLieu().subscribe(
        res=>this.lieux=res
        )
        }
    
      opensweetalert(){
           
          Swal.fire(
            'crée!',
            'Votre Agence a été crée',
            'success'
          ).then( result => {
            console.log(result);
            if(result.isConfirmed ){
              
            
             this.agence.libelleAgence = "";
              this.agence.codeAgence = "";       
           
           

            }
          })
       //   window.location.reload()
         
      
    }
  //  retour(){
    //  window.location.reload()
    //}
    retour(){
      // window.location.reload()
    }
}


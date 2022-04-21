import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common'
import { Direction } from 'src/app/models/direction';
import { DirectionService } from 'src/app/service/direction.service';


import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LieuArchive } from 'src/app/models/lieu-archive';
import { TypeDirection } from 'src/app/models/type-direction';



@Component({
  selector: 'app-creedirection',
  templateUrl: './creedirection.component.html',
  styleUrls: ['./creedirection.component.css']
})
export class CreedirectionComponent implements OnInit {
  direction=new Direction();
  msg='';
  productForm !: FormGroup; 
  lieux!:LieuArchive[];
  types!:TypeDirection[];
  constructor(   private location: Location,
    private _service:DirectionService,private formBuilder : FormBuilder,private router: Router) { }
  ngOnInit(): void {
    

  this.getType()
 this.getLieu()}
 getType(){
  this._service.getType().subscribe(
  res=>this.types=res
  )
  }
  getLieu(){
    this._service.getLieu().subscribe(
    res=>this.lieux=res
    )
    }
 public  onSubmit(){ 
  let variable={
    codedirection:this.direction.codedirection,
    libelleDirection:this.direction.libelleDirection,
    lieu_d_archivage_1_ere_age:{id:4,lieu:"Bab El -Oued",code:1},
    lieu_d_archivage_2_eme_age:{id:1,lieu:"Bureau",code:3},
    typeDirection:{libelle_type_dir:"DGA commerciale",id:1,codeType_dir:"1"}
    }
     
    this._service.getLieuById(this.direction.lieu_d_archivage_1_ere_age).subscribe(
     res=>{variable.lieu_d_archivage_1_ere_age.id=res.id; 
      variable.lieu_d_archivage_1_ere_age.lieu=res.lieu ; 
      variable.lieu_d_archivage_1_ere_age.code=res.code; 
      console.log("aff1",variable);

      this._service.getLieuById(this.direction.lieu_d_archivage_2_eme_age).subscribe(
        res=>{variable.lieu_d_archivage_2_eme_age.id=res.id;
          variable.lieu_d_archivage_2_eme_age.lieu=res.lieu ;
          variable.lieu_d_archivage_2_eme_age.code=res.code; 
           console.log("aff2",variable);


           this._service.getTypeById(this.direction.typeDirection).subscribe(
            res=>{variable.typeDirection.id=res.id;
              variable.typeDirection.libelle_type_dir=res.libelle_type_dir ;
              variable.typeDirection.libelle_type_dir=res.libelle_type_dir; 
               console.log("aff3",variable);


           this._service.createDirection(variable).subscribe(     
    
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
     }
    )

     
    
     console.log("hiiii",this.direction);
     console.log(variable);
      
      }

      opensweetalert(){
           
        Swal.fire(
          'crée!',
          'Votre Direction a été crée',
          'success'
        ).then( result => {
          console.log(result);
          if(result.isConfirmed ){
            
          
           this.direction.codedirection = "";
            this.direction.libelleDirection = "";       
          // this.direction.lieu_d_archivage_1_ere_age = "";
            //this.direction.lieu_d_archivage_2_eme_age ="";
           // this.direction.typedirection = "";

          }
        })
     //   window.location.reload()
       
    
  
//  retour(){
  //  window.location.reload()
  //}
      }
  retour(){
    window.location.reload()
  }
  
}
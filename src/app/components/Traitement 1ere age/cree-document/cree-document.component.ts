import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cree-document',
  templateUrl: './cree-document.component.html',
  styleUrls: ['./cree-document.component.css']
})
export class CreeDocumentComponent implements OnInit {
 suividocument=new SuiviDocument();
 libelleDirections!:any[];
 designation_Nomenclatures!:any[];
  msg='';
  productForm !: FormGroup; 
  constructor(private _service:SuiviDocumentService,private service:DirectionService,private serviice:NomenclatureService) { }

  ngOnInit(): void {
 this.getDirections()
 console.log(this.libelleDirections)
 this.getNomenclatures()
  }
  
  public  onSubmit(){ 
console.log(this.suividocument)


this.service.getDirectionById(this.suividocument.libelleDirection).subscribe(
  res=>{this.suividocument.libelleDirection=res
  console.log(this.suividocument)
  //
this.serviice.getNomenclatureById(this.suividocument.designation_Nomenclature).subscribe(
  res=>{this.suividocument.designation_Nomenclature=res

    console.log(this.suividocument)
//


  this._service.createDocument(this.suividocument).subscribe(
    data=>{ 
      console.log("response received");
},
     error =>{   
     console.log("exception occured");
      this.msg=error.error;
   
     }
  )

},
error=>{console.log(error);}
)},
  error=>{console.log(error)}
)
}
  
  opensweetalert(){
           
    Swal.fire(
      'crée!',
      'Votre Document a été crée',
      'success'
    ).then( result => {
      console.log(result);
      if(result.isConfirmed ){
        
      
      // this.suividocument.date_De_creation_Du_Document=;
        this.suividocument.chapitre_comptable="";       
      // this.suividocument.nombre_De_pages = 
        //this.suividocument.nombre_De_documents=;
        this.suividocument.limite_de_conservation_1ere_age = "";

      }
    })
   

}

retour(){
window.location.reload()
}


  async getDirections() {
 await this.service.getDirections().subscribe(
    res=>{
      console.log(res,'hh')
      this.libelleDirections=res,
      console.log(this.libelleDirections,'jj')
    },

    error=>console.log(error)
  )
}

async getNomenclatures() {
 await this.serviice.getNomenclatures().subscribe(
   res=>{ 
     this.designation_Nomenclatures=res,
     console.log(this.designation_Nomenclatures,'jj')
   },

    error=>console.log(error)

   
 )

 
}}

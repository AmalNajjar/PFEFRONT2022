import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { SuiviDocument } from 'src/app/models/suivi-document';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cree-document',
  templateUrl: './cree-document.component.html',
  styleUrls: ['./cree-document.component.css']
})
export class CreeDocumentComponent implements OnInit {
 suividocument=new SuiviDocument();
  msg='';
  productForm !: FormGroup; 
  constructor(private _service:SuiviDocumentService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      id:['',Validators.required],
      chapitre_comptable:['',Validators.required],
      numero_document:['',Validators.required],
      nombre_De_pages:['',Validators.required],
   
      date_De_creation_Du_Document:['',Validators.required],
      date_d_entree_Du_Document: ['', Validators.required],
      nombre_De_documents :['', Validators.required],
      limite_de_conservation_1ere_age: ['', Validators.required]
  
  })
  }
  public  onSubmit(){ 

    this._service.createDocument(this.suividocument).subscribe(
      data=>{ 
        console.log("response received");
},
       error =>{   
       console.log("exception occured");
        this.msg=error.error;
     
       }
    )
   /* let variable={
      numero_document:this. suividocument.numero_document,
      chapitre_comptable:this.suividocument.chapitre_comptable,
      nombre_De_pages:this.suividocument.nombre_De_pages,
      date_De_creation_Du_Document:this.suividocument.date_De_creation_Du_Document,
      date_d_entree_Du_Document:this.suividocument.date_d_entree_Du_Document,
      nombre_De_documents :this.suividocument.nombre_De_documents,
      limite_de_conservation_1ere_age:this.suividocument.limite_de_conservation_1ere_age,
      libelleDirection:{id:4,libelleDirection:"direction centrale",codedirection:"1",lieu_d_archivage_1_ere_age:{id:4,lieu:"Bab El -Oued",code:1},
      lieu_d_archivage_2_eme_age:{id:1,lieu:"Bureau",code:3},
      typeDirection:{libelle_type_dir:"DGA commerciale",id:1,codeType_dir:"1"}},
      designation_Nomenclature:{id:1,code_Nomenclature:"11",designation_Nomenclature:"nomenclature1", dureeConservation_1ereAge:"1ans", dureeConservation_2emeAge:"2ans",valeurHistorique_3emeAge:"non"}
      }
       
      this._service.getDirectionById(this.suividocument.libelleDirection).subscribe(
       res=>{variable.libelleDirection.id=res.id; 
        variable.libelleDirection.libelleDirection=res.libelleDirection ; 
        variable.libelleDirection.codedirection=res.codedirection;
        variable.libelleDirection.lieu_d_archivage_1_ere_age=res.lieu_d_archivage_1_ere_age;
        variable.libelleDirection.lieu_d_archivage_2_eme_age=res.lieu_d_archivage_2_eme_age;
        variable.libelleDirection.typeDirection=res.typeDirection;
        console.log("aff1",variable);
  
        
             this._service.createDocument(variable).subscribe(     
      
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
      
      
       
       console.log("hiiii",this.suividocument);
       console.log(variable);
        
          }*/}
  
  opensweetalert(){
           
    Swal.fire(
      'crée!',
      'Votre Document a été crée',
      'success'
    ).then( result => {
      console.log(result);
      if(result.isConfirmed ){
        
      
      // this.suividocument.date_De_creation_Du_Document=;
        //this.suividocument.chapitre_comptable="";       
      // this.suividocument.nombre_De_pages = 
        //this.suividocument.nombre_De_documents=;
        //this.suividocument.limite_de_conservation_1ere_age = "";

      }
    })
 //   window.location.reload()
   

}
//  retour(){
//  window.location.reload()
//}
retour(){
window.location.reload()
}

}

import { Component, OnInit } from '@angular/core';
import { SuiviDocument } from 'src/app/models/suivi-document';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cree-sortiedoc',
  templateUrl: './cree-sortiedoc.component.html',
  styleUrls: ['./cree-sortiedoc.component.css']
})
export class CreeSortiedocComponent implements OnInit {
  suividocument=new SuiviDocument();
  msg='';
  constructor(private _service:SuiviDocumentService) { }

  ngOnInit(): void {
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
}
opensweetalert(){
           
  Swal.fire(
    'crée!',
    'Votre Direction a été crée',
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

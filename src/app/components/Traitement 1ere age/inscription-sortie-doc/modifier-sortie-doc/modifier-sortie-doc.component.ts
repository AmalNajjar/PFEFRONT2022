import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';

import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { SuiviDocument } from 'src/app/models/suivi-document';
@Component({
  selector: 'app-modifier-sortie-doc',
  templateUrl: './modifier-sortie-doc.component.html',
  styleUrls: ['./modifier-sortie-doc.component.css']
})
export class ModifierSortieDocComponent implements OnInit {
 
  id !:number;
  suividocument : any;
  constructor(private _service:SuiviDocumentService,private route:ActivatedRoute, private location: Location , @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    this.suividocument =new SuiviDocument();
    if(  this.id=this.route.snapshot.params['id']){
      this._service.getDOcumentById(this.id).subscribe(
        data=>{console.log(data)
        this.suividocument=data;},
        error=>console.log(error));
    }
  }
  public  onSubmit(){ 

    this._service.updateDocument(this.data.id,this.data.suividocument).subscribe(
      data=>console.log(data),error=>console.error());
      this.suividocument =new SuiviDocument();
}
opensweetalert(){
  Swal.fire({
    title:'Êtes-vous sûre?',
    text: "",
    icon:'warning',
    showCancelButton:true,
    confirmButtonText:'oui,modifiez-le!',
    cancelButtonText:'Non,gardez-le'
      
  }).then((result) => {
    console.log(result)
    if(result.isConfirmed){
      this.onSubmit();
    }
    if (result.value) {
      Swal.fire(
        'modifié!',
        'Votre inscription de sortie de document  a été modifié',
        'success'
      )
    window.location.reload()
    }else if (result.dismiss==Swal.DismissReason.cancel){
    Swal.fire(
      'Annulé',
      'error'
    )

    }
  })


}
retour(){
  window.location.reload()
}
}

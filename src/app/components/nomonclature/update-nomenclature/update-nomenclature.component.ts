import { Component,  OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Nomenclature } from 'src/app/models/nomenclature';
import { NomenclatureService } from 'src/app/service/nomenclature.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common'
import { Inject } from '@angular/core';

@Component({
  selector: 'app-update-nomenclature',
  templateUrl: './update-nomenclature.component.html',
  styleUrls: ['./update-nomenclature.component.css']
})
export class UpdateNomenclatureComponent implements OnInit {

  id :any;
  nomenclature : any;
 constructor(private _service:NomenclatureService,private _router:Router,private route:ActivatedRoute
  , private location: Location , @Inject(MAT_DIALOG_DATA) public data : any) { }

 ngOnInit(): void {
   this.nomenclature =new Nomenclature();
 if(  this.id=this.route.snapshot.params['id']){
   this._service.getNomenclatureById(this.id).subscribe(
     data=>{console.log(data)
     this.nomenclature =data;},
     error=>console.log(error));
 }}
 onModif(){
   
   this._service.updateNomenclature(this.data.id,this.data.nomenclature ).subscribe(
     data=>console.log(data),error=>console.error());
     this.nomenclature =new Nomenclature();
 }


 opensweetalert(){
  Swal.fire({
    title:'Êtes-vous sûre?',
    text: "Vous ne pourrez pas récupérer ce fichier imaginaire?",
    icon:'warning',
    showCancelButton:true,
    confirmButtonText:'oui,modifiez-le!',
    cancelButtonText:'Non,gardez-le'
      
  }).then((result) => {
    console.log(result)
    if(result.isConfirmed){
      this.onModif();
    }
    if (result.value) {
      Swal.fire(
        'modifié!',
        'Votre fichier imaginaire a été modifié',
        'success'
      )
    window.location.reload()
    }else if (result.dismiss==Swal.DismissReason.cancel){
    Swal.fire(
      'Annulé',
      'Votre fichier imaginaire est en sécurité :)',
      'error'
    )

    }
  })


}
retour(){
  window.location.reload()
}}

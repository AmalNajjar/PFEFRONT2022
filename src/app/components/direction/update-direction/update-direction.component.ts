import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Direction } from 'src/app/models/direction';
import { DirectionService } from 'src/app/service/direction.service';
import { Location } from '@angular/common'
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-direction',
  templateUrl: './update-direction.component.html',
  styleUrls: ['./update-direction.component.css']
})
export class UpdateDirectionComponent implements OnInit {

id:any;
   direction :any;
  
  constructor(  private service:DirectionService,private router:Router,private route:ActivatedRoute, 
    private location: Location , @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
   
    this.direction=new Direction();
   if( this.id=this.route.snapshot.params['id']){
    this.service.getDirectionById(this.id).subscribe(
      data=>{console.log(data)
      this.direction=data;
            },
      error=>console.log(error));
      

  }}
  
   onModif(){
     this.service.updateDirection(this.data.id,this.data.direction).subscribe(
    data=>console.log(data),error=>console.error());
    this.direction=new Direction();
   // this.router.navigate(['/updatedirection']);
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
    
//alert(){
  //this.dialogService.OpenConfirmDialog('Etes vous sur de modifier cette direction')
  //.afterClosed().subscribe(res=>{
//if (res){
  //this.service.updateDirection(this.id,this.direction);
  //this.router.navigate(['/gestionDirection'])
  //this.notservice.warn('modification avec succee');
//}
//else{
  //this.service.updateDirection(this.id,this.direction).subscribe(
    //data=>console.log(data),error=>console.error());
 // this.service.getDirections();
  //this.router.navigate(['/gestionDirection'])
//}
  //});
//}

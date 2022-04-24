import { Component, OnInit } from '@angular/core';
import { DemandeDeVersement } from 'src/app/models/demande-de-versement';
import { DemandeDeVersementService } from 'src/app/service/demande-de-versement.service';
import { DirectionService } from 'src/app/service/direction.service';
import { NomenclatureService } from 'src/app/service/nomenclature.service';



@Component({
  selector: 'app-demande-de-versement',
  templateUrl: './demande-de-versement.component.html',
  styleUrls: ['./demande-de-versement.component.css']
})
export class DemandeDeVersementComponent implements OnInit {
  Expediteurs!:any[];
  Lieux!:any[];
  designation_Nomenclatures!:any[];
  demande=new DemandeDeVersement();
  msg='';
  constructor(private _service:DemandeDeVersementService,private service:DirectionService,private serviice:NomenclatureService) { }

  ngOnInit(): void {
    this.getDirections()
    console.log(this.Expediteurs)
    this.getNomenclatures()
    this.getLieux()
  }
  public  Envoyer(){ 


    this.service.getDirectionById(this.demande.Expediteur).subscribe(
      res=>{this.demande.Expediteur=res
      console.log(this.demande)
      //this.service.getLieuById(this.demande.Destinataire).subscribe(
        //res=>{this.demande.Destinataire=res
        //console.log(this.demande)
//
this.service.getLieuById(this.demande.Destinataire).subscribe(
  res=>{this.demande.Destinataire.id=res.id; 
    this.demande.Destinataire.lieu=res.lieu ; 
    this.demande.Destinataire.code=res.code; 
  




        //

      this.serviice.getNomenclatureById(this.demande.designation_nomenclature).subscribe(
        res=>{
          this.demande.designation_nomenclature=res
        
    this._service.createDemande(this.demande).subscribe(
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
      error=>{console.log(error);},
      )},
      error=>{console.log(error);
      

      })
    }
  async getDirections() {
    await this.service.getDirections().subscribe(
       res=>{
         console.log(res,'hh')
         this.Expediteurs=res,
         console.log(this.Expediteurs,'jj')
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
   
    
   }

   async getLieux() {
    await this.service.getLieu().subscribe(
      res=>{ 
        this.Lieux=res,
        console.log(this.Lieux,'jj')
      },
   
       error=>console.log(error)
   
      
    )
   
    
   }
}

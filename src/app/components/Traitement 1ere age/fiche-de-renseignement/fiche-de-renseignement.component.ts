import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';
import { SuiviDocument } from 'src/app/models/suivi-document';

@Component({
  selector: 'app-fiche-de-renseignement',
  templateUrl: './fiche-de-renseignement.component.html',
  styleUrls: ['./fiche-de-renseignement.component.css']
})
export class FicheDeRenseignementComponent implements OnInit {
  id!:number 
  suividocument=new SuiviDocument();
  constructor(private service:SuiviDocumentService,private route: ActivatedRoute,
    private router: Router,@Inject(MAT_DIALOG_DATA) public data : any) { }
  ngOnInit(): void {

    if(this.id=this.route.snapshot.params['id']){
      this.suividocument=new SuiviDocument();
      this.service.getDOcumentById(this.id).subscribe(
        data=>{ console.log(data);
                 this.suividocument=data;
        },
        error=>console.log(error)
        )
    }
  
    }
  }



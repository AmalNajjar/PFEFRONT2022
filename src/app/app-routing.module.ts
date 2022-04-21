import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterAgenceComponent } from './components/agence/consulter-agence/consulter-agence.component';
import { CreeAgenceComponent } from './components/agence/cree-agence/cree-agence.component';
import { DeleteAgenceComponent } from './components/agence/delete-agence/delete-agence.component';
import { GestionAgenceComponent } from './components/agence/gestion-agence/gestion-agence.component';
import { UpdateAgenceComponent } from './components/agence/update-agence/update-agence.component';
import { DashComponent } from './components/dash/dash.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConsulterDirectionComponent } from './components/direction/consulter-direction/consulter-direction.component';
import { CreedirectionComponent } from './components/direction/creedirection/creedirection.component';
import { DeleteDirectionComponent } from './components/direction/delete-direction/delete-direction.component';
import { GestionDirectionComponent } from './components/direction/gestion-direction/gestion-direction.component';
import { UpdateDirectionComponent } from './components/direction/update-direction/update-direction.component';
import { ConsulterNomenclatureComponent } from './components/nomonclature/consulter-nomenclature/consulter-nomenclature.component';
import { CreeNomenclatureComponent } from './components/nomonclature/cree-nomenclature/cree-nomenclature.component';
import { DeleteNomenclatureComponent } from './components/nomonclature/delete-nomenclature/delete-nomenclature.component';
import { GestionNomenclatureComponent } from './components/nomonclature/gestion-nomenclature/gestion-nomenclature.component';
import { UpdateNomenclatureComponent } from './components/nomonclature/update-nomenclature/update-nomenclature.component';
import { ConsulterStructureComponent } from './components/structure/consulter-structure/consulter-structure.component';
import { CreerStructureComponent } from './components/structure/creer-structure/creer-structure.component';
import { DeleteStructureComponent } from './components/structure/delete-structure/delete-structure.component';
import { GestionStructureComponent } from './components/structure/gestion-structure/gestion-structure.component';
import { UpdateStructureComponent } from './components/structure/update-structure/update-structure.component';
import { AjoutDateDestructionComponent } from './components/Traitement 1ere age/ajout-date-destruction/ajout-date-destruction.component';
import { AjouteDateDestructionComponent } from './components/Traitement 1ere age/ajoute-date-destruction/ajoute-date-destruction.component';
import { CreeDocumentComponent } from './components/Traitement 1ere age/cree-document/cree-document.component';
import { DestructionDocumentComponent } from './components/Traitement 1ere age/destruction-document/destruction-document.component';
import { FicheDeRenseignementComponent } from './components/Traitement 1ere age/fiche-de-renseignement/fiche-de-renseignement.component';
import { ConsulterSortieDocComponent } from './components/Traitement 1ere age/inscription-sortie-doc/consulter-sortie-doc/consulter-sortie-doc.component';
import { CreeSortiedocComponent } from './components/Traitement 1ere age/inscription-sortie-doc/cree-sortiedoc/cree-sortiedoc.component';
import { InscriptionSortieDocComponent } from './components/Traitement 1ere age/inscription-sortie-doc/inscription-sortie-doc.component';
import { ModifierSortieDocComponent } from './components/Traitement 1ere age/inscription-sortie-doc/modifier-sortie-doc/modifier-sortie-doc.component';
import { ListeDemandeVersementComponent } from './components/Traitement 1ere age/liste-demande-versement/liste-demande-versement.component';
import { TraiterDemandeComponent } from './components/Traitement 1ere age/traiter-demande/traiter-demande.component';
import { TriDocumentComponent } from './components/Traitement 1ere age/tri-document/tri-document.component';
import { CompteUtilisateurComponent } from './components/utilisateur/compte-utilisateur/compte-utilisateur.component';
import { ConsulterCompteComponent } from './components/utilisateur/consulter-compte/consulter-compte.component';
import { DeleteCompteComponent } from './components/utilisateur/delete-compte/delete-compte.component';
import { GestionParametragesComponent } from './components/utilisateur/gestion-parametrages/gestion-parametrages.component';
import { UpdateCompteComponent } from './components/utilisateur/update-compte/update-compte.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path:'dashboard' ,
    component:DashComponent , 
    children:[

      {path:'gestionDirection',component:GestionDirectionComponent},
      {path:'creerdirection',component:CreedirectionComponent },
      {path:'updatedirection/:id',component:UpdateDirectionComponent},
      {path:'deletedirection/:id',component:DeleteDirectionComponent},
      {path:'consulterdirection/:id',component:ConsulterDirectionComponent},
      //
      {path:'gestionAgence',component:GestionAgenceComponent},
      {path:'creeragence',component:CreeAgenceComponent},
      {path:'updateagence/:id',component:UpdateAgenceComponent},
      {path:'deleteagence/:id',component:DeleteAgenceComponent},
      {path:'consulteragence/:id',component:ConsulterAgenceComponent},
      //
      {path:'gestionNomenclature',component:GestionNomenclatureComponent},
      {path:'creernomenclature',component:CreeNomenclatureComponent},
      {path:'updatenomenclature/:id',component:UpdateNomenclatureComponent},
      {path:'deletenomenclature/:id',component:DeleteNomenclatureComponent},
      {path:'consulternomenclature/:id',component:ConsulterNomenclatureComponent},
      //
      {path:'triDoc1ereage',component:TriDocumentComponent},
      {path:'creeDocument',component:CreeDocumentComponent},
      {path:'fiche/:id',component:FicheDeRenseignementComponent},
      {path:'inscriptionSortie1ere',component:InscriptionSortieDocComponent},
      {path:'creeSortie1ere',component:CreeSortiedocComponent},
      {path:'modifierSortie1ere/:id',component:ModifierSortieDocComponent},
      {path:'ConsulterSortie1ere/:id',component:ConsulterSortieDocComponent},
      {
        path:'destruction-document/:id',
        component:DestructionDocumentComponent
      },
      {
        path:'ajoute-date-destruction',
        component:AjoutDateDestructionComponent
      },

      {
        path:'compte-utilisateur',
        component:CompteUtilisateurComponent
      },
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'consulter-compte/:id',
        component:ConsulterCompteComponent
      },
      {
        path:'gestion-parametrages',
        component:GestionParametragesComponent
      },
      {
        path:'update-compte/:id',
        component:UpdateCompteComponent
      },
      {
        path:'delete-compte/:id',
        component:DeleteCompteComponent
      }, 
      { path:'creer-structure',
      component: CreerStructureComponent
      },
       {
        path:'gestion-structure',
        component: GestionStructureComponent
      },
      {
        path:'delete-structure/:id',
        component: DeleteStructureComponent
      },
      {
        path:'consulter-structure/:id',
        component: ConsulterStructureComponent
      },
      {
        path:'update-structure/:id',
        component:UpdateStructureComponent
      },
      {
       path:'destruction-document/:id',
       component:DestructionDocumentComponent
     },{
      path:'ajoute-date-destruction',
      component:AjouteDateDestructionComponent
    },
    {
      path:'liste-demande-versement',
      component: ListeDemandeVersementComponent
    },
    {
      path:'traiter-demande',
      component:TraiterDemandeComponent
    },
    {path:'tri-Doc1ereage',component:TriDocumentComponent},
    {path:'cree-Document',component:CreeDocumentComponent},
    ]
  },

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

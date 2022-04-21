import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
 
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { DataTablesModule } from 'angular-datatables';



import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
 
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'; 
import { CreeAgenceComponent } from './components/agence/cree-agence/cree-agence.component';
import { ConsulterAgenceComponent } from './components/agence/consulter-agence/consulter-agence.component';
import { DeleteAgenceComponent } from './components/agence/delete-agence/delete-agence.component';
import { GestionAgenceComponent } from './components/agence/gestion-agence/gestion-agence.component';
import { UpdateAgenceComponent } from './components/agence/update-agence/update-agence.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ConsulterDirectionComponent } from './components/direction/consulter-direction/consulter-direction.component';
import { CreedirectionComponent } from './components/direction/creedirection/creedirection.component';
import { DeleteDirectionComponent } from './components/direction/delete-direction/delete-direction.component';
import { GestionDirectionComponent } from './components/direction/gestion-direction/gestion-direction.component';
import { UpdateDirectionComponent } from './components/direction/update-direction/update-direction.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ConsulterNomenclatureComponent } from './components/nomonclature/consulter-nomenclature/consulter-nomenclature.component';
import { CreeNomenclatureComponent } from './components/nomonclature/cree-nomenclature/cree-nomenclature.component';
import { DeleteNomenclatureComponent } from './components/nomonclature/delete-nomenclature/delete-nomenclature.component';
import { GestionNomenclatureComponent } from './components/nomonclature/gestion-nomenclature/gestion-nomenclature.component';
import { UpdateNomenclatureComponent } from './components/nomonclature/update-nomenclature/update-nomenclature.component';
import { AjoutDateDestructionComponent } from './components/Traitement 1ere age/ajout-date-destruction/ajout-date-destruction.component';
import { CreeDocumentComponent } from './components/Traitement 1ere age/cree-document/cree-document.component';
import { DestructionDocumentComponent } from './components/Traitement 1ere age/destruction-document/destruction-document.component';
import { FicheDeRenseignementComponent } from './components/Traitement 1ere age/fiche-de-renseignement/fiche-de-renseignement.component';
import { ConsulterSortieDocComponent } from './components/Traitement 1ere age/inscription-sortie-doc/consulter-sortie-doc/consulter-sortie-doc.component';
import { CreeSortiedocComponent } from './components/Traitement 1ere age/inscription-sortie-doc/cree-sortiedoc/cree-sortiedoc.component';
import { InscriptionSortieDocComponent } from './components/Traitement 1ere age/inscription-sortie-doc/inscription-sortie-doc.component';
import { ModifierSortieDocComponent } from './components/Traitement 1ere age/inscription-sortie-doc/modifier-sortie-doc/modifier-sortie-doc.component';
import { SuiviDocumentComponent } from './components/Traitement 1ere age/suivi-document/suivi-document.component';
import { TriDocumentComponent } from './components/Traitement 1ere age/tri-document/tri-document.component';
import { DashComponent } from './components/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConsulterStructureComponent } from './components/structure/consulter-structure/consulter-structure.component';
import { CreerStructureComponent } from './components/structure/creer-structure/creer-structure.component';
import { DeleteStructureComponent } from './components/structure/delete-structure/delete-structure.component';
import { GestionStructureComponent } from './components/structure/gestion-structure/gestion-structure.component';
import { UpdateStructureComponent } from './components/structure/update-structure/update-structure.component';
import { AjouteDateDestructionComponent } from './components/Traitement 1ere age/ajoute-date-destruction/ajoute-date-destruction.component';
import { ListeDemandeVersementComponent } from './components/Traitement 1ere age/liste-demande-versement/liste-demande-versement.component';
import { TraiterDemandeComponent } from './components/Traitement 1ere age/traiter-demande/traiter-demande.component';
import { CompteUtilisateurComponent } from './components/utilisateur/compte-utilisateur/compte-utilisateur.component';
import { ConsulterCompteComponent } from './components/utilisateur/consulter-compte/consulter-compte.component';
import { DeleteCompteComponent } from './components/utilisateur/delete-compte/delete-compte.component';
import { GestionParametragesComponent } from './components/utilisateur/gestion-parametrages/gestion-parametrages.component';
import { UpdateCompteComponent } from './components/utilisateur/update-compte/update-compte.component';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';

@NgModule({
  declarations: [
   
    AppComponent, 
  NavigationComponent,
   

    CreeAgenceComponent,
    UpdateAgenceComponent,
    ConsulterAgenceComponent,
    DeleteAgenceComponent,
    GestionAgenceComponent,
    GestionNomenclatureComponent,
    CreeNomenclatureComponent,
    UpdateNomenclatureComponent,
    DeleteNomenclatureComponent,
    ConsulterNomenclatureComponent,

        DeleteDirectionComponent,
    ConsulterDirectionComponent,
    UpdateDirectionComponent,
    CreedirectionComponent,
    GestionDirectionComponent,
    SuiviDocumentComponent,
    TriDocumentComponent,
    CreeDocumentComponent,
    InscriptionSortieDocComponent,
    FicheDeRenseignementComponent,
    CreeSortiedocComponent,
    ConsulterSortieDocComponent,
    ModifierSortieDocComponent,
 
    DashboardComponent,
    CompteUtilisateurComponent,
    ConsulterCompteComponent,
    GestionParametragesComponent,
    UpdateCompteComponent,
    SearchfilterPipe,
    DeleteCompteComponent,
    CreerStructureComponent,
    DeleteStructureComponent,
    UpdateStructureComponent,
    ConsulterStructureComponent,
    GestionStructureComponent,
    DestructionDocumentComponent,
    AjouteDateDestructionComponent,
    ListeDemandeVersementComponent,
    TraiterDemandeComponent,
    CreeDocumentComponent,
    TriDocumentComponent,
    SuiviDocumentComponent,
    AjoutDateDestructionComponent,
    DestructionDocumentComponent,
    DashComponent,

    

  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,  
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ReactiveFormsModule,
    LayoutModule,
    MatDialogModule,
    MatToolbarModule,
    
    MatButtonModule,
    
    MatSidenavModule,
    
    MatIconModule,
    
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
      CommonModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatProgressSpinnerModule,


      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatGridListModule,
      MatCardModule,
      MatMenuModule,
      HttpClientModule,
      FormsModule,
      NgbModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

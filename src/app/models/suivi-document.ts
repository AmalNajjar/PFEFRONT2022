import { Direction } from "./direction";
import { Nomenclature } from "./nomenclature";

export class SuiviDocument {
    id!:number;
    numero_document!:number;
    chapitre_comptable!:string;
    nombre_De_pages!:number;
    date_De_creation_Du_Document!:Date;
    date_d_entree_Du_Document!:Date;
    nombre_De_documents !:number;
    codedocument!:number;
    numero_d_ordre!:number;
    emplacement_physique!:number;
    limite_de_conservation_1ere_age!:string;
    libelleDirection!:Direction;
    designation_Nomenclature!:Nomenclature;
}

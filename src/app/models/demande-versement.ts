import { Nomenclature } from "./nomenclature";
import { Direction } from "./direction";
export class DemandeVersement {
    id!:number;
    num_dde!:number;
    date_dde!:Date;
    objet!:String;
    nbrCarton!:number;
    etat!:String;
    designationNomenclature!:Nomenclature;
    libelleDirection!:Direction;
   constructor(){}    
}

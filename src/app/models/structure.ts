import { LieuArchive } from "./lieu-archive";

export class Structure {
    
        id!:number;
        code!:string;
        libelle!:string;
        lieu_archivage1ereAge!:LieuArchive;
        lieu_archivage2emeAge!:LieuArchive;
        constructor(){}     
}

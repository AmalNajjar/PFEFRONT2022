import { LieuArchive } from "./lieu-archive";
import { TypeDirection } from "./type-direction";


export class Direction {
    id!: number;
    libelleDirection!: string;
   codedirection!: string;
    typeDirection!:TypeDirection;
    lieu_d_archivage_1_ere_age!:LieuArchive;
    lieu_d_archivage_2_eme_age!:LieuArchive;
    constructor(){}
   
}

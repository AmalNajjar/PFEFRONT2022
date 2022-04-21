import { LieuArchive } from "./lieu-archive";

export class Agence {
    id!: number;
  
    codeAgence!: string;
    libelleAgence!: string;
    lieu_d_archivage_1_ere_age!:LieuArchive;
    lieu_d_archivage_2_eme_age!:LieuArchive;
}

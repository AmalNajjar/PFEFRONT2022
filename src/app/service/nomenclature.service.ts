import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agence } from '../models/agence';
import { Nomenclature } from '../models/nomenclature';

@Injectable({
  providedIn: 'root'
})
export class NomenclatureService {

  constructor(private http: HttpClient) {
  }            
 
  isAuth:boolean =false;
 public  getNomenclatures() 
 {return this.http.get<any>("http://localhost:8083/api/test/Nomenclatures");
}
  

  getNomenclatureById(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:8083/api/test/Nomenclatures/" + id);
  }
  
  public createNomenclature(Nomenclature:Nomenclature) :Observable<any>{
    return this.http.post<any>("http://localhost:8083/api/test/Nomenclature",Nomenclature);
  }


  updateNomenclature(id:number, Nomenclature:Nomenclature):Observable<any>{
    return this.http.put<any>("http://localhost:8083/api/test/Nomenclatures/" + Nomenclature.id,Nomenclature);
  }

  deleteNomenclatures(id:number): Observable<any>{
    return this.http.delete<any>("http://localhost:8083/api/test/Nomenclatures/"+id);
    }
}

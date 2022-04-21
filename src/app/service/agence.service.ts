import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agence } from '../models/agence';
import { LieuArchive } from '../models/lieu-archive';
 

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

   
  constructor(private http: HttpClient) {
  }            
 
  isAuth:boolean =false;
 public  getAgences() 
 {return this.http.get<any>("http://localhost:8083/api/test/Agences");
}
  

  getAgenceById(id:number):Observable<any>{
    return this.http.get<any>("http://localhost:8083/api/test/Agences/" + id);
  }
  
  public createAgence(agence:any) :Observable<any>{
    return this.http.post<any>("http://localhost:8083/api/test/Agence",agence);
  }


  updateAgence(id:number, agence:Agence):Observable<any>{
    return this.http.put<any>("http://localhost:8083/api/test/Agences/" + agence.id,agence);
  }

  deleteAgence(id:number): Observable<any>{
    return this.http.delete<any>("http://localhost:8083/api/test/Agences/"+id);
    } 

getLieu():Observable<LieuArchive[]>{
  return this.http.get<LieuArchive[]>("http://localhost:8083/api/test/lieu");
}

getLieuById(id:any):Observable<LieuArchive>{
  return this.http.get<LieuArchive>(`http://localhost:8083/api/test/lieu/${id}`);
}}
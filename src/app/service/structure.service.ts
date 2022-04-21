import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LieuArchive } from '../models/lieu-archive';
import { Structure } from '../models/structure';


@Injectable({
  providedIn: 'root'
})
export class StructureService {

  constructor(private _http : HttpClient) { }
  baseUrl:string="http://localhost:8084/api/test/Structures/";

  public registrerCompteFromRemoteS(structure :any):Observable<any>{
    return this._http.post<any>("http://localhost:8084/api/test/Structure",structure);
  }
  
  public getStructures(){
    return this._http.get<any>("http://localhost:8084/api/test/Structures");   
  }

  getStructureById(id:number):Observable<any>{
    return this._http.get<any>(this.baseUrl + id);
  }

  deleteStructure(id:number): Observable<any>{
  return this._http.delete<any>(this.baseUrl+id);
  } 

  updateStructure(id:number, structure:Structure):Observable<any>{
    return this._http.put<any>(this.baseUrl + structure.id,structure);
  }

  getLieu():Observable<LieuArchive[]>{
    return this._http.get<LieuArchive[]>("http://localhost:8084/api/test/lieu");
  }
 
  getLieuById(id:any):Observable<LieuArchive>{
    return this._http.get<LieuArchive>(`http://localhost:8084/api/test/lieu/${id}`);
  }
}

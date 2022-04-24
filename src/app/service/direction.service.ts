import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Direction } from '../models/direction';
import { LieuArchive } from '../models/lieu-archive';
import { TypeDirection } from '../models/type-direction';




@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  
  
  
  constructor(private http: HttpClient) {
  }            
  //baseUrl : string = "http://localhost:8083/api/test/Directions/";
  isAuth:boolean =false;
 public  getDirections() :Observable<any>
 {return this.http.get<any>("http://localhost:8083/api/test/Directions");
}
  

  getDirectionById(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:8083/api/test/Directions/" + id);
  }
  
  public createDirection(direction: any) :Observable<any>{
    return this.http.post<any>("http://localhost:8083/api/test/Direction",direction);
  }


  updateDirection(id:number, direction:Direction):Observable<any>{
    return this.http.put<any>("http://localhost:8083/api/test/Directions/" + direction.id,direction);
  }

  deleteDirection(id:number): Observable<any>{
    return this.http.delete<any>("http://localhost:8083/api/test/Directions/"+id);
    } 
    getLieu():Observable<LieuArchive[]>{
      return this.http.get<LieuArchive[]>("http://localhost:8083/api/test/lieu");
    }
    
    getLieuById(id:any):Observable<LieuArchive>{
      return this.http.get<LieuArchive>(`http://localhost:8083/api/test/lieu/${id}`);
    }
    getType():Observable<TypeDirection[]>{
      return this.http.get<TypeDirection[]>("http://localhost:8083/api/test/type");
    }
    
    getTypeById(id:any):Observable<TypeDirection>{
      return this.http.get<TypeDirection>(`http://localhost:8083/api/test/type/${id}`);
    }}


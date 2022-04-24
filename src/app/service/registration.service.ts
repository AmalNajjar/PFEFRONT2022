import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }
  baseUrl:string="http://localhost:8083/api/test/Comptes/";

  public registrerCompteFromRemote(compte :Compte):Observable<any>{
    return this._http.post<any>("http://localhost:8083/api/test/Compte",compte);
 
  }

  public getComptes(){
    return this._http.get<any>("http://localhost:8083/api/test/Comptes");
    
  }

  getCompteById(id:number):Observable<any>{
    return this._http.get<any>(this.baseUrl + id);
  }

  deleteCompte(id:number): Observable<any>{
  return this._http.delete<any>(this.baseUrl+id);
  } 

  updateCompte(id:number, compte:Compte):Observable<any>{
    return this._http.put<any>(this.baseUrl + compte.id,compte);
  }

  public findByEmail(email:string):Observable<Compte>{
  return this._http.get<Compte>(`${this.baseUrl}/findbyEmail/${email}`) ;
  }


}


/*baseUrl : string = "http://localhost:8083/api/test/Comptes";
  isAuth:boolean =false;
 public  getComptes() : Observable<compte[]> {
    return this.http.get<Direction[]>(${this.baseUrl});
  }

  getDirectionById(id: number): Observable<any> {
    return this.http.get(${this.baseUrl}/${id});
  }
  
  public createDirection(direction: Direction)   {
    return this.http.post(${this.baseUrl}, direction, {responseType:'text' as 'json'});
  }
 


  updateDirection(id: number,  value: any): Observable<Object> {
    return this.http.put(${this.baseUrl}/${id}, value);
  }

  deleteDirection(id: number): Observable<any> {
    return this.http.delete(${this.baseUrl}/${id}, { responseType: 'text' });
  }
  /*getCompteByEmail(email:string):Observable<any>{
  return this._http.get<Compte>(`$ http://localhost:8083/api/test/findByEmail/${email}`);
}*/

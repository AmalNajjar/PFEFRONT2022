import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SuiviDocument } from '../models/suivi-document';


@Injectable({
  providedIn: 'root'
})
export class SuiviDocumentService {
  constructor(private http: HttpClient) {
  }            
  //baseUrl : string = "http://localhost:8083/api/test/Directions/";
  isAuth:boolean =false;
 public  getDocuments() 
 {
   return this.http.get<any>("http://localhost:8083/api/test/SuiviDocuments");
}
getDOcumentById(id:number):Observable<any>{
  return this.http.get<any>("http://localhost:8083/api/test/SuiviDocuments/" + id);
}
public createDocument(suividocument:SuiviDocument) :Observable<any>{
  return this.http.post<any>("http://localhost:8083/api/test/SuiviDocument",suividocument);
}
updateDocument(id:number,suividocument:SuiviDocument):Observable<any>{
  return this.http.put<any>("http://localhost:8083/api/test/SuiviDocuments/" + suividocument.id,suividocument);
}


}
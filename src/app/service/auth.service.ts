import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LoginInfo } from '../models/login-info';


import { SignUpInfo } from '../models/sign-up-info';

import { TokenService } from './token.service';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  const TOKEN_KEY='AuthToken';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

 //private currentUserSubject:BehaviorSubject<any>;
 //public currentUser:Observable<any>;

  private signupUrl = 'http://localhost:8083/api/auth/';
  private signinUrl = 'http://localhost:8083/api/auth/';
  constructor(private http:HttpClient,private jwtHelper:JwtHelperService,
    private tokenstorage:TokenService,private router:Router){
     // this.currentUserSubject=new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
      //this.currentUser=this.currentUserSubject.asObservable();

    }
  //  public get  currentUseValue():any{
    //  return this.currentUserSubject.value;

    
    register(signupinfo:SignUpInfo): Observable<any> {
      return this.http.post(this.signupUrl + 'signup', {
        username: signupinfo.username,
        email: signupinfo.email,
        password: signupinfo.password
      }, httpOptions);
    }
 // signup(signupinfo:SignUpInfo){
   // return this.http.post<JwtResponse>(this.signupUrl,signupinfo,httpOptions).pipe(map(data=>{
     // this.saveUserData(data);
      //return data;
    //}));
  //}
  login(login:LoginInfo): Observable<any> {
    return this.http.post(this.signinUrl + 'signin', {
      username: login.username,
      password: login.password
    }, httpOptions);
  }
 // login(login:LoginInfo){
   // return this.http.post<JwtResponse>(this.signinUrl,login,httpOptions).pipe(map(data=>{
     // this.saveUserData(data);
      //return data;}));

  //}
 
/*private saveUserData(data: JwtResponse){
  this.tokenstorage.saveToken(data.accesToken);  
  this.tokenstorage.saveUsername(data.username);
  this.tokenstorage.saveAuthorities(data.authorities);
  this.currentUserSubject.next(data.accesToken);   */   



 

























































  /*  token: string|undefined;
  public loggedUser:string|undefined;
  public isloggedIn: Boolean = false;
  public roles:Role[]|undefined;

  private helper = new JwtHelperService();

   
  constructor(private router: Router,
             private http : HttpClient) { }



    signIn(user :User){
      this.loggedUser = user.username;
      this.isloggedIn = true;
      this.roles = user.roles;
      localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
  

  saveToken(jwt:string | any){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true; 
    this.decodeJWT(); 
  }
  
  decodeJWT()
  {   if (this.token == undefined)
            return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }
 


  loadToken() {
    this.token == localStorage.getItem('jwt');
    this.decodeJWT();
  }

  getToken():string |undefined{
    return this.token;
  }

logout() { 
  this.loggedUser = undefined;
  this.roles = undefined;
  this.token= undefined;
  this.isloggedIn = false;
  localStorage.removeItem('jwt');
  this.router.navigate(['/login']);
}

  

  isAdmin():Boolean{
    let admin: Boolean = false;
if (!this.roles) //this.roles== undefiened
return false;
this.roles.forEach((curRole) => {
if(curRole.role == 'ADMIN') {
admin = true;
}
});
return admin;
  }

   

  isTokenExpired(): Boolean
  {
    return  this.helper.isTokenExpired(this.token);
  }


  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username :string){    
    this.getUserFromDB(username).subscribe((user: User)=>{
      this.roles = user.roles;
      });
    
  }
  getUserFromDB(username:string):Observable<User>
{
const url = `${this.apiURL}`;
return this.http.get<User>(url);
}
*/

}

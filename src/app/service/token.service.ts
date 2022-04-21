import { Injectable } from '@angular/core';
//const TOKEN_KEY = 'AuthToken';
//const USERNAME_KEY = 'AuthUsername';
//const AUTHORITIES_KEY='AuthAuthorities';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
//private roles:Array<string>|any;

  constructor() { }

 

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string|null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY)||'{}');
  }
}



 /* public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string |null{
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
  public getUsername(): string |null{
    return sessionStorage.getItem(USERNAME_KEY);
  }
  public saveAuthorities(authorities: string[]|null) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY,JSON.stringify( authorities));

  }
  public getAuthorities(): string[]{
    this.roles=[];
    if(sessionStorage.getItem(TOKEN_KEY)){
    JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)|| '{}').forEach((authority: { authority: string; }) => {
      this.roles.push(authority.authority);
    });}
      return this.roles;
  }*/



import { Injectable } from '@angular/core';
import {ShareService} from './share.service';
const TOKEN = 'Token_key';
const ID = 'Id_key';
const NAME = 'Name_key';
const EMAIL = 'Email_key';
const AVATAR = 'Avatar_key';
const ROLE = 'Role_key';
const STORAGE = 'Storage_key';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private share: ShareService) {
  }
  public setStorage(storage: string) {
    localStorage.removeItem(STORAGE);
    localStorage.setItem(STORAGE, storage);
    sessionStorage.removeItem(STORAGE);
    sessionStorage.setItem(STORAGE, storage);
  }
  public getStorage() {
    if (localStorage.getItem(STORAGE) == 'local' || sessionStorage.getItem(STORAGE) == 'local') {
      return localStorage.getItem(STORAGE);
    } else {
      return sessionStorage.getItem(STORAGE);
    }
  }

  public setToken(token: string) {
    if (this.getStorage() == 'local') {
      localStorage.removeItem(TOKEN);
      localStorage.setItem(TOKEN, token);
    } else {
      sessionStorage.removeItem(TOKEN);
      sessionStorage.setItem(TOKEN, token);
    }
  }

  public getToken() {
    if (this.getStorage() == 'local') {
      return localStorage.getItem(TOKEN);
    } else {
      return sessionStorage.getItem(TOKEN);
    }
  }

  public setId(id: string) {
    if (this.getStorage() == 'local') {
      localStorage.removeItem(ID);
      localStorage.setItem(ID, id);
    } else {
      sessionStorage.removeItem(ID);
      sessionStorage.setItem(ID, id);
    }
  }

  public getId() {
    if (this.getStorage() == 'local') {
      return localStorage.getItem(ID);
    } else {
      return sessionStorage.getItem(ID);
    }
  }

  public setName(name: string) {
    if (this.getStorage() == 'local') {
      localStorage.removeItem(NAME);
      localStorage.setItem(NAME, name);
    } else {
      sessionStorage.removeItem(NAME);
      sessionStorage.setItem(NAME, name);
    }
  }

  public getName() {
    if (this.getStorage() == 'local') {
      return localStorage.getItem(NAME);
    } else {
      return sessionStorage.getItem(NAME);
    }
  }
  public setEmail(email: string) {
    if (this.getStorage() == 'local') {
      localStorage.removeItem(EMAIL);
      localStorage.setItem(EMAIL, email);
    } else {
      sessionStorage.removeItem(EMAIL);
      sessionStorage.setItem(EMAIL, email);
    }
  }

  public getEmail() {
    if (this.getStorage() == 'local') {
      return localStorage.getItem(EMAIL);
    } else {
      return sessionStorage.getItem(EMAIL);
    }
  }public setRole(role: string[]) {
    if (this.getStorage() == 'local') {
      localStorage.removeItem(ROLE);
      localStorage.setItem(ROLE, JSON.stringify(role));
    } else {
      sessionStorage.removeItem(ROLE);
      sessionStorage.setItem(ROLE, JSON.stringify(role));
    }
  }

  public getRole(): string {
    if (this.getStorage() == 'local') {
      let roles = JSON.parse(<string>localStorage.getItem(ROLE));
      return roles[0].authority;
    } else {
      let roles = JSON.parse(<string>sessionStorage.getItem(ROLE));
      return roles[0].authority;
    }
  }
  isLogger() {
    return !!this.getToken();
  }
  rememberMe(token, id, name,email, roles, storage) {
    this.setStorage(storage);
    this.setToken(token);
    this.setId(id);
    this.setName(name);
    this.setEmail(email);
    this.setRole(roles);
  }

  logout() {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }

  //  getIdAccount(): string {
  //   if(localStorage.getItem(this.ID_ACCOUNT_KEY) != null){
  //     return <string> localStorage.getItem(this.ID_ACCOUNT_KEY);
  //   }
  //   return <string> sessionStorage.getItem(this.ID_ACCOUNT_KEY);
  // }
}

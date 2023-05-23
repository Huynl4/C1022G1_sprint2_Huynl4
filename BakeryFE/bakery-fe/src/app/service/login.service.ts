import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenService} from './token.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username = ''
  constructor(private http: HttpClient,private tokenService:TokenService) { }

  login(obj): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/login',{username: obj.username,password: obj.password})
  }

  register(obj):Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signup',obj);
  }


  profile(id):Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/auth/profile/'+id);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor(private httpClient: HttpClient) {
  }

  history(id: number, page: number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/auth/oder/' + id + '/?page=' + page);
  }

  detail(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/auth/oderDetail/' + id);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {
  }

  addBill(userId: any, total: number, time: string): Observable<any> {
    debugger
    let dto = {
      account: userId,
      dateOrder: time,
      total: total
    }
    return this.httpClient.post("http://localhost:8080/api/cart/buy", dto);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }
  showAllCart(id): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/api/cart/list/' + id);
  }

  addCart(accountId, productId, quantity, size): Observable<any> {
    let dto = {
      accountId: accountId,
      productId: productId,
      quantity: quantity,
      size: size
    };
    return this.httpClient.post('http://localhost:8080/api/cart/create', dto);
  }

  increaseQuantity(id: number, productId: number, size: string): Observable<any> {
    let dto = {
      accountId: id,
      productId: productId,
    };
    console.log(dto.accountId)
    console.log(dto.productId)
    return this.httpClient.post<any>('http://localhost:8080/api/cart/increase', dto);
  }

  editCart(size: string, id: number, productId: number, userId: number): Observable<any> {
    let dto = {
      id: id,
      size: size,
      account: userId,
      productId: productId,
    };
    return this.httpClient.post('http://localhost:8080/api/cart/edit', dto);
  }

  reduceQuantity(id, productId, size): Observable<any> {
    let dto = {
      accountId: id,
      productId: productId,
      size: size
    };
    return this.httpClient.post('http://localhost:8080/api/cart/reduce', dto);
  }
  deleteCart(id): Observable<any> {

    return this.httpClient.delete('http://localhost:8080/api/cart/deleteCart/'+ id);
  }
}

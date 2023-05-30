import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../entity/product";
import {Category} from "../entity/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getProductBanhNgot(page: number, size: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8080/api/auth/list-banh-ngot?page=' + page + '&size=' + size);
  }

  getProductBanhMan(page1: number, size1: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8080/api/auth/list-banh-man?page1=' + page1 + '&size1=' + size1);
  }

  getProductBanhChay(page2: number, size2: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8080/api/auth/list-banh-chay?page2=' + page2 + '&size2=' + size2);
  }

  findProductById(id: number): Observable<Product> {
    return this.httpClient.get('http://localhost:8080/api/auth/findProductById/' + id);
  }

  getListSearchResults(page: number, size: number, keyword: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8080/api/auth/getListSearchResults?page=' + page + '&size=' + size + '&keyword=' + keyword)
  }

  getAquaTypeList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('http://localhost:8080/api/auth/listProductCategory')
  }

  changeListForOption(page: number, size: number, keyword: string, id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8080/api/auth/changeListForOptionList?page=' + page + '&size=' + size + '&keyword=' + keyword + "&id=" + id)
  }

  findByIdAccount(id: number): Observable<any> {
    debugger
    return this.httpClient.get<any>('http://localhost:8080/api/auth/info/' + id);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from "../model/order";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  createOrder(order: Order): Observable<any> {
    return this.http.post('/orders', order, {
      headers: new HttpHeaders()
        .set('Content-type', 'application/json')
        .set('Accept', 'application/json')
    });
  }
}

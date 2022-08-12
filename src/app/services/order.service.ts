import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from "../model/order";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private token: any;

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  createOrder(order: Order): Observable<any> {
    this.token = this.cookieService.get('XSRF-TOKEN');
    return this.http.post('/orders', order, {
      headers: new HttpHeaders()
        .set('Content-type', 'application/json')
        .set('Accept', 'application/json')
        .set('X-XSRF-TOKEN', this.token)
    });
  }
}

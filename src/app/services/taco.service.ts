import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Taco} from "../model/taco";
import {Ingredient} from "../model/ingredient";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TacoService {

  public token: any;

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  // 获取最近搭配的墨西哥煎饼卷
  getRecentTacos(): Observable<Taco[]> {
    return this.http.get<Taco[]>('/design/recent');
  }

  // 获取墨西哥煎饼卷所有配料
  getAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('/ingredientsx');
  }

  //创建一个墨西哥煎饼卷
  createTaco(taco: Taco): Observable<any> {
    this.token = this.cookieService.get('XSRF-TOKEN');
    console.log('token: ' + this.token);
    return this.http.post('/design', taco,
      {
        headers: new HttpHeaders()
          .set('Content-type', 'application/json')
          .set('X-XSRF-TOKEN', this.token)
      });
  }
}

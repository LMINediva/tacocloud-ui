import {Injectable} from '@angular/core';
import {Cart} from "../model/cart";
import {Taco} from "../model/taco";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items$: Cart[];

  public subject: BehaviorSubject<any> = new BehaviorSubject<any>(0);

  constructor() {
    this.items$ = [];
  }

  // 添加到购物车
  addToCart(taco: Taco) {
    this.items$.push(new Cart(taco));
    console.log("购物车内容：" + this.items$);
    this.subject.next(this.items$);
  }

  // 获取购物车商品项
  getItemsInCart() {
    return this.items$;
  }

  // 获取购物车商品总数
  getCartTotal() {
    let total = 0;
    this.items$.forEach(item => {
      total += item.lineTotal;
    });
    return total;
  }

  // 清空购物车
  emptyCart() {
    this.items$ = [];
  }
}

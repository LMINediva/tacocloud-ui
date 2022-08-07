import {Injectable} from '@angular/core';
import {Cart} from "../model/cart";
import {Taco} from "../model/taco";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items$: Cart[];

  constructor() {
    this.items$ = [];
  }

  // 添加到购物车
  addToCart(taco: Taco) {
    this.items$.push(new Cart(taco));
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

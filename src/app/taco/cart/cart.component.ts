import {Component, OnInit} from '@angular/core';
import {Order} from "../../model/order";
import {CartService} from "../../services/cart.service";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public order: Order;

  constructor(private cartService: CartService,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
  }

  // 获取购物车商品项
  get cartItems() {
    return this.cartService.getItemsInCart();
  }

  // 获取购物车所有商品数量
  get cartTotal() {
    return this.cartService.getCartTotal();
  }

  onSubmit() {
    this.cartService.getItemsInCart().forEach(cartItem => {
      this.order.tacos.push(cartItem.taco);
    });

    this.orderService.createOrder(this.order)
      .subscribe((result: any) => {
        console.log("订单创建成功！" + result.msg);
        //清空购物车
        this.cartService.emptyCart();
      }, (err) => {
        console.error('表单创建失败！' + err.msg);
      });
  }
}

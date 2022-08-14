import {Component, OnInit} from '@angular/core';
import {Order} from "../../model/order";
import {CartService} from "../../services/cart.service";
import {OrderService} from "../../services/order.service";
import {Cart} from "../../model/cart";
import {Subscription} from "rxjs";
import {User} from "../../model/user";
import {Taco} from "../../model/taco";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public order: Order;
  public subscription: Subscription;
  // public data: any;
  public carts: Cart[];

  constructor(private cartService: CartService,
              private orderService: OrderService) {
    this.initializeOrder();
    this.carts = [];
    this.subscription = new Subscription();
  }

  initializeOrder() {
    this.order = {
      id: 0,
      placeAt: new Date(),
      user: {
        id: 1,
        username: '',
        password: '',
        fullname: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        phoneNumber: ''
      },
      deliveryName: '',
      deliveryStreet: '',
      deliveryCity: '',
      deliveryState: '',
      deliveryZip: '',
      ccNumber: '',
      ccExpiration: '',
      ccCVV: '',
      tacos: []
    };
  }

  ngOnInit(): void {
    this.subscription = this.cartService.subject.subscribe((data) => {
      this.carts = data;
      console.log("ok");
      console.log("订阅的数据：" + data.toString());
      for (let i = 0; i < data.length; i++) {
        console.log("数据为：" + data[i].quantity);
        console.log("数据为：" + data[i].taco);
        console.log("数据为：" + data[i].taco.name);
        console.log("数据为：" + data[i].taco.createdAt);
        console.log("数据为：" + data[i].taco.ingredients);
      }
    });
    console.log("okk");
  }

  // 获取购物车商品项
  get cartItems() {
    // return this.cartService.getItemsInCart();
    return this.carts;
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

  ngOndestry() {
    this.subscription.unsubscribe();
  }
}

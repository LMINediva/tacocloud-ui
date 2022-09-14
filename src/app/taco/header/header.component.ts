import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'taco-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cart: CartService;
  public isMenuCollapsed: boolean;

  constructor(cart: CartService) {
    this.cart = cart;
    this.isMenuCollapsed = true;
  }

  ngOnInit(): void {
  }

}

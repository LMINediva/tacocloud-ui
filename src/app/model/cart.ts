import {Taco} from "./taco";

export class Cart {
  // 数量
  public quantity: number = 1;
  public taco: Taco;

  constructor(taco: Taco) {
    this.taco = taco;
  }

  // 总价
  get lineTotal() {
    return this.quantity * 4.99;
  }
}

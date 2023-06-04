import {User} from "./user";
import {Taco} from "./taco";

export class Order {
  id: number = 0;
  placeAt: Date = new Date();
  user: User = new class implements User {
    city: string = "北京";
    fullname: string = "";
    id: number = 0;
    password: string = "";
    phoneNumber: string = "";
    state: string = "";
    street: string = "";
    username: string = "";
    zip: string = "";
  };
  deliveryName: string = "";
  deliveryStreet: string = "";
  deliveryCity: string = "";
  deliveryState: string = "";
  deliveryZip: string = "";
  ccNumber: string = "";
  ccExpiration: string = "";
  ccCVV: string = "";
  tacos: Taco[] = [];
}

import {User} from "./user";
import {Taco} from "./taco";

export class Order {
  id: number;
  placeAt: Date;
  user: User;
  deliveryName: string;
  deliveryStreet: string;
  deliveryCity: string;
  deliveryState: string;
  deliveryZip: string;
  ccNumber: string;
  ccExpiration: string;
  ccCVV: string;
  tacos: Taco[];
}

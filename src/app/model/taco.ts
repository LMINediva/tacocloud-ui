import {Ingredient} from "./ingredient";

// 墨西哥煎饼卷
export interface Taco {
  // id: number;
  name: string;
  createdAt: Date;
  ingredients: Ingredient[];
}

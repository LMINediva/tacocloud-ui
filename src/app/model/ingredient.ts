enum Type {
  WRAP = 'WRAP',
  PROTEIN = 'PROTEIN',
  VEGGLES = 'VEGGLES',
  CHEESE = 'CHEESE',
  SAUCE = 'SAUCE'
}

// 配料
export interface Ingredient {
  id: string;
  name: string;
  type: Type;
}

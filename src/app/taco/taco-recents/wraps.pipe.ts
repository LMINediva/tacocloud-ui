import {Pipe, PipeTransform} from '@angular/core';
import {Ingredient} from "../../model/ingredient";

@Pipe({
  name: 'wraps'
})
export class WrapsPipe implements PipeTransform {

  transform(ingredients: Ingredient[], ...args: any[]): Ingredient[] {
    const wraps: Ingredient[] = [];
    for (const ingredient of ingredients) {
      if (ingredient.type === 'WRAP') {
        const wrap: Ingredient = {
          id: ingredient.id,
          name: 'a' + ingredient.name,
          type: ingredient.type
        };
        wraps.push(wrap);
      }
    }
    return wraps;
  }
}

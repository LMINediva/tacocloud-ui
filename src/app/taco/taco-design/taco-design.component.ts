import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../model/ingredient";
import {TacoService} from "../../services/taco.service";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {Taco} from "../../model/taco";

@Component({
  selector: 'app-taco-design',
  templateUrl: './taco-design.component.html',
  styleUrls: ['./taco-design.component.css']
})
export class TacoDesignComponent implements OnInit {
  public taco: Taco;
  public allIngredients: any;
  //饼干类带外皮的
  public wraps: Ingredient[] = [];
  //蛋白质
  public proteins: Ingredient[] = [];
  //蔬菜
  public veggies: Ingredient[] = [];
  //奶酪
  public cheeses: Ingredient[] = [];
  //酱汁
  public sauces: Ingredient[] = [];

  constructor(private tacoService: TacoService,
              private router: Router,
              private cartService: CartService) {
    this.initializeTaco();
  }

  initializeTaco() {
    this.taco = {
      name: '',
      createdAt: new Date(),
      ingredients: []
    }
  }

  ngOnInit(): void {
    this.tacoService.getAllIngredients()
      .subscribe(data => {
        this.allIngredients = data;
        this.wraps = this.allIngredients.filter(w => w.type === 'WRAP');
        this.proteins = this.allIngredients.filter(p => p.type === 'PROTEIN');
        this.veggies = this.allIngredients.filter(v => v.type === 'VEGGIES');
        this.cheeses = this.allIngredients.filter(c => c.type === 'CHEESE');
        this.sauces = this.allIngredients.filter(s => s.type === 'SAUCE');
      });
  }

  updateIngredients(ingredient, event) {
    if (event.target.checked) {
      this.taco.ingredients.push(ingredient);
    } else {
      this.taco.ingredients.splice(
        this.taco.ingredients.findIndex(i => i === ingredient), 1);
    }
  }

  onSubmit() {
    this.taco.createdAt = new Date();
    this.tacoService.createTaco(this.taco)
      .subscribe(result => this.cartService.addToCart(result));
    this.router.navigate(['/cart']);
  }
}

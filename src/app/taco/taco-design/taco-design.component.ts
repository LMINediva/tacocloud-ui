import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../model/ingredient";
import {TacoService} from "../../services/taco.service";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-taco-design',
  templateUrl: './taco-design.component.html',
  styleUrls: ['./taco-design.component.css']
})
export class TacoDesignComponent implements OnInit {
  public allIngredients: any;
  //饼干类带外皮的
  public wraps = [];
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
              private cart: CartService) {
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
      })
  }

  updateIngredients(ingredient, event) {

  }
}

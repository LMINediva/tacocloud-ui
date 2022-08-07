import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TacoRecentsComponent} from "./taco/taco-recents/taco-recents.component";
import {TacoDesignComponent} from "./taco/taco-design/taco-design.component";
import {CartComponent} from "./taco/cart/cart.component";
import {HomeComponent} from "./taco/home/home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recents',
    component: TacoRecentsComponent
  },
  {
    path: 'design',
    component: TacoDesignComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

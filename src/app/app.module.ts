import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TacoRecentsComponent} from './taco/taco-recents/taco-recents.component';
import {CloudTitleComponent} from './taco/cloud-title/cloud-title.component';
import {NonWrapsPipe} from './taco/taco-recents/non-wraps.pipe';
import {WrapsPipe} from './taco/taco-recents/wraps.pipe';
import {LittleButtonComponent} from './taco/little-button/little-button.component';
import {TacoService} from "./services/taco.service";
import {TacoDesignComponent} from './taco/taco-design/taco-design.component';
import {GroupBoxComponent} from './taco/group-box/group-box.component';
import {BigButtonComponent} from './taco/big-button/big-button.component';
import {CartService} from "./services/cart.service";
import {CartComponent} from './taco/cart/cart.component';
import {OrderService} from "./services/order.service";
import {HomeComponent} from './taco/home/home.component';
import {HeaderComponent} from './taco/header/header.component';
import {FooterComponent} from './taco/footer/footer.component';
import {CookieService} from "ngx-cookie-service";
import {LoginComponent} from './taco/login/login.component';
import {LocationsComponent} from './taco/locations/locations.component';
import {SpecialsComponent} from './taco/specials/specials.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    TacoRecentsComponent,
    CloudTitleComponent,
    NonWrapsPipe,
    WrapsPipe,
    LittleButtonComponent,
    TacoDesignComponent,
    GroupBoxComponent,
    BigButtonComponent,
    CartComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LocationsComponent,
    SpecialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    TacoService,
    CartService,
    OrderService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

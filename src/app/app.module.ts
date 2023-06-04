import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BigButtonComponent} from './taco/big-button/big-button.component';
import {CartComponent} from './taco/cart/cart.component';
import {CloudTitleComponent} from './taco/cloud-title/cloud-title.component';
import {FooterComponent} from './taco/footer/footer.component';
import {GroupBoxComponent} from './taco/group-box/group-box.component';
import {HeaderComponent} from './taco/header/header.component';
import {HomeComponent} from './taco/home/home.component';
import {LittleButtonComponent} from './taco/little-button/little-button.component';
import {LocationsComponent} from './taco/locations/locations.component';
import {LoginComponent} from './taco/login/login.component';
import {SpecialsComponent} from './taco/specials/specials.component';
import {TacoDesignComponent} from './taco/taco-design/taco-design.component';
import {TacoRecentsComponent} from './taco/taco-recents/taco-recents.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NonWrapsPipe} from './taco/taco-recents/non-wraps.pipe';
import {WrapsPipe} from './taco/taco-recents/wraps.pipe';
import {LazyLoadImageModule} from "ng-lazyload-image";
import {TacoService} from "./services/taco.service";
import {CartService} from "./services/cart.service";
import {OrderService} from "./services/order.service";
import {CookieService} from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    BigButtonComponent,
    CartComponent,
    CloudTitleComponent,
    FooterComponent,
    GroupBoxComponent,
    HeaderComponent,
    HomeComponent,
    LittleButtonComponent,
    LocationsComponent,
    LoginComponent,
    SpecialsComponent,
    TacoDesignComponent,
    TacoRecentsComponent,
    NonWrapsPipe,
    WrapsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    LazyLoadImageModule
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

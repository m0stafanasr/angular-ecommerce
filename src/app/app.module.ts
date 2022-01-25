import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { FormsModule } from '@angular/forms';
import { ShadowDirective } from './directives/shadow.directive';
import { GetAgePipe } from './pipes/get-age.pipe';
import { CreditcardPipe } from './pipes/creditcard.pipe';
import { MainOrderComponent } from './main-order/main-order.component';
import { MainComponent } from './components/main/main.component';
import { MainpageComponent } from './mainpage/mainpage.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SidemenuComponent,
    ShadowDirective,
    GetAgePipe,
    CreditcardPipe,
    MainOrderComponent,
    MainComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

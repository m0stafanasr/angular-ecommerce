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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SidemenuComponent,
    ShadowDirective,
    GetAgePipe,
    CreditcardPipe
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

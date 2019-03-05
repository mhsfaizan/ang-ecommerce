import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CommonMaterialModule } from '../common-material/common-material.module';
import { MenComponent } from './men/men.component';
import { FormalShirtComponent } from './formal-shirt/formal-shirt.component';
import { CasualShirtsComponent } from './casual-shirts/casual-shirts.component';
import { ProductComponent } from './product/product.component';
import { SingleProductComponent } from './single-product/single-product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    MenComponent,
    FormalShirtComponent,
    CasualShirtsComponent,
    ProductComponent,
    SingleProductComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonMaterialModule,
  ]
})
export class AppModuleModule { }

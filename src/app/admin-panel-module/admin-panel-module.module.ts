import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminAppComponent } from './admin-app.component';
import { DHomeComponent } from './d-home/d-home.component';
import { DLoginComponent } from './d-login/d-login.component';
import { CommonMaterialModule } from '../common-material/common-material.module';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddPriceComponent } from './add-price/add-price.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AdminAppComponent,
    DHomeComponent,
    DLoginComponent,
    AdminNavComponent,
    ProductsComponent,
    AddProductComponent,
    AddPriceComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  entryComponents:[AddPriceComponent]
})
export class AdminPanelModuleModule { }

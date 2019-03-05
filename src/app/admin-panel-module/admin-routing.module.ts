import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAppComponent } from './admin-app.component';
import { DHomeComponent } from './d-home/d-home.component';
import { DLoginComponent } from './d-login/d-login.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { RedirectGuard } from './redirect.guard';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: AdminAppComponent,
    children: [
      { path: '', redirectTo: 'admin/auth', pathMatch: 'full' },
      { path: 'admin/auth',canActivate:[RedirectGuard], component: DLoginComponent },
      {
        path: 'admin/products',
        canActivate: [AuthGuardGuard],
        component: DHomeComponent,
        children: [
          { path: '', component: ProductsComponent },
          {path:'add-product',component:AddProductComponent},
          {path:'product/:id',component:ProductComponent}
        ]
      },
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

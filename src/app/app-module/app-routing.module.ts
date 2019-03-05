import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { CommonModule } from '@angular/common';
import { FormalShirtComponent } from './formal-shirt/formal-shirt.component';
import { CasualShirtsComponent } from './casual-shirts/casual-shirts.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: HomeComponent },
      { 
        path: 'men',
        component: MenComponent ,
        children:[
          { path:'top-wear/formal-shirts',component: FormalShirtComponent},
          { path:'top-wear/product/:id',component: SingleProductComponent},
          { path:'top-wear/casual-shirts',component: CasualShirtsComponent},
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
  ], exports: [RouterModule]
})
export class AppRoutingModule { }

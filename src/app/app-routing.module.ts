import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'',redirectTo:'/app',pathMatch:'full'},
  {path:'app',loadChildren:'./app-module/app-module.module#AppModuleModule'},
  {path:"adminpanel",loadChildren:'./admin-panel-module//admin-panel-module.module#AdminPanelModuleModule'},
  {path:"**",redirectTo:"app/404",pathMatch:'full'},
  { path:'app/404',component:ErrorComponent}
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


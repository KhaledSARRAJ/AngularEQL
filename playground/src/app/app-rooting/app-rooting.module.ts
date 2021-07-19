import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "../myroute/user/user.component";
import {AdminComponent} from "../myroute/admin/admin.component";

const appRoutes: Routes=[
  {path: 'user', component:UserComponent},
  {path: 'admin', component:AdminComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRootingModule { }

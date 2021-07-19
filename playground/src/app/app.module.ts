import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AppRootingModule } from './app-rooting/app-rooting.module';
import { UserComponent } from './myroute/user/user.component';
import { AdminComponent } from './myroute/admin/admin.component';
import { NumberComponent } from './myservice/number/number.component';
import {UserAuthModule} from "./user-auth/user-auth.module";
import { HtmlformComponent } from './template/htmlform/htmlform.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UserComponent,
    AdminComponent,
    NumberComponent,
    HtmlformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserAuthModule,
    AppRootingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

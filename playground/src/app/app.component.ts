import { Component } from '@angular/core';
import {TodoModel} from "./todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //getNom(nom: string){
  //  console.log('Hello khaled',nom);
  //}
  loginUser(item:any){
    console.log(item);
  }
}

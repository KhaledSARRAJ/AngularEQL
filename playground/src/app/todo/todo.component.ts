import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from "../todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

 @Input() toto!:TodoModel;

  constructor() { }

  ngOnInit(): void {
  }

}

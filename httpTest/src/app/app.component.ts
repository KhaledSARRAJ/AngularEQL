import { Component } from '@angular/core';
import {TaskService} from "./service/task.service";
import{Post} from "./models/post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private taskService: TaskService) {
}
posts: Post[] = [];
//Fetch all articles
  getAllPosts(){
    this.taskService.getAllPosts()
      .subscribe(
        data =>this.posts = data,
        errorCode => console.log(errorCode)      );

  }
}

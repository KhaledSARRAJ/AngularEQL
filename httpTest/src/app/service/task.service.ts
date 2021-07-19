import {Injectable} from "@angular/core";
import{HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post.model";

@Injectable()
export class TaskService{
  baseUrl: string ="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) {}
  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl);
  }
  getPostById(id: string):Observable<Post>{
    let params = new HttpParams().set('id',id);
    return this.http.get<Post>(this.baseUrl,{params});
  }
}

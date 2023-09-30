import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiInterface } from '../models/API';
import { Post } from 'src/app/posts/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPost() {
    return this.http.get<ApiInterface>('http://localhost:3000/api/posts');
  }

  addNewPost(body: Post){
    console.log(body);
    return this.http.post('http://localhost:3000/api/posts', body);
  }
}

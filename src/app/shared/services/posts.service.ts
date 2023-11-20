import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiInterface } from '../models/API';
import { Post } from 'src/app/posts/post.model';
import { Subject, map } from 'rxjs';
import { Router } from '@angular/router';
import { API } from './API';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient, private router: Router) {}

  postsUpdated = new Subject<Post[]>();
  posts: any[] = [];

 public getAllPost() {
    return this.http.get<ApiInterface>(API.getAllPost).pipe(
      map((postData)=>{
        return postData.data.map((post)=>{
          return {
            title: post.title,
            content: post.content,
            id: post._id,
            imagePath: post.imagePath
          }
        })
      })
    ).subscribe((res)=>{
      this.posts = res;
      this.postsUpdated.next([...this.posts]);
   });
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  getPost(id:string){
    return this.http.get<ApiInterface>(API.getPost, {params:{'id': `${id}`}})
  }

  editPost(body: FormData){
    return this.http.post<ApiInterface>(API.editPost, body).subscribe(res=>{
      const response: ApiInterface = res;
      const post = response.data;
      console.log(response);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
      this.router.navigate(['/']);
    });
  }



  addNewPost(body: FormData){
    return this.http.post<ApiInterface>(API.addPost, body).subscribe(res=>{
      const response: ApiInterface = res;
      const post = response.data;
      this.posts.push(post);
      console.log(response.data)
      this.postsUpdated.next([...this.posts]);
      this.router.navigate(['/']);
    });
  }

  deletePost(id:string){
    return this.http.delete<ApiInterface>(API.deletePost+id).subscribe(res=>{
      this.getAllPost();
      console.log(res);
    });
  }
}

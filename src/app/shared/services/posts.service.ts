import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }


  getAllPost(){
    return this.http.get('http://localhost:3000/api/posts');
  }
}

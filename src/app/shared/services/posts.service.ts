import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiInterface } from '../models/API';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPost() {
    return this.http.get<ApiInterface>('http://localhost:3000/api/posts');
  }
}

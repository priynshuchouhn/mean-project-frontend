import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fronted'
  posts:Post[] = [];

  onPostAdded(post: {title: string, content: string}){
    this.posts.push(post)
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostsService){}
 ngOnInit(): void {
   this.postService.getAllPost().subscribe((res:{})=>{
    console.log(res);
   })
 }

 @Input() posts: Post[] = []

}

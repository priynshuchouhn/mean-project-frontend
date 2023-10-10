import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiInterface } from 'src/app/shared/models/API';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;
  mode: string = 'create';
  post!: Post;
  postId!: string



  constructor(private postService: PostsService, private route: ActivatedRoute) {
    this.postForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'content': new FormControl('', Validators.required)
    })
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postid')!;
        this.postService.getPost(this.postId).subscribe((res) => {
          const response: ApiInterface = res;
          const post = response.data;
        });
      }
    })
  }


  onAddPost() {
    const post: Post = {
      title: this.postForm.value['title'],
      content: this.postForm.value['content']
    }
    this.postService.addNewPost(post);
    this.postForm.reset();
  }
}

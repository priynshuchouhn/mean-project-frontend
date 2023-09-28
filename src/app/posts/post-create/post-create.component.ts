import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  postForm: FormGroup

  @Output() postAdded = new EventEmitter();

  constructor(private postService: PostsService){
    this.postForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'content': new FormControl('', Validators.required)
    })
  }


  onAddPost(){
    const post: Post = {
      title: this.postForm.value['title'],
      content: this.postForm.value['content']
    }
    this.postService.addNewPost(post).subscribe((res)=>{console.log(res)});
    // this.postAdded.emit(post);
    this.postForm.reset();
  }
}

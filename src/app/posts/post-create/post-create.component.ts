import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  title: string = '';
  content: string = '';
  postForm: FormGroup

  @Output() postAdded = new EventEmitter();

  constructor(){
    this.postForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'content': new FormControl('', Validators.required)
    })
  }


  onAddPost(){
    const post = {
      title: this.postForm.value['title'],
      content: this.postForm.value['content']
    }
    this.postAdded.emit(post);
    this.postForm.reset();
  }
}

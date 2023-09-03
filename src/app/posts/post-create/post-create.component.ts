import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  title: string = '';
  content: string = '';

  @Output() postAdded = new EventEmitter();


  onAddPost(){
    const post = {
      title: this.title,
      content: this.content
    }
    this.postAdded.emit(post);
    this.title = '';
    this.content= '';
  }
}

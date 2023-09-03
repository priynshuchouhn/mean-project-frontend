import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  @Input() posts: {title: string, content:string}[] = [
    // {title: 'First post', content:'This the content of first post'},
    // {title: 'second post', content:'This the content of second post'},
    // {title: 'third post', content:'This the content of third post'},
    // {title: 'fourth post', content:'This the content of fourth post'},
  ]

}

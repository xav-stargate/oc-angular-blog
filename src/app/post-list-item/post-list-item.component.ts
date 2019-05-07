import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;


  ngOnInit() {
  }

  ILike() {
    console.log('I Like function');
    this.postLoveIts++;
  }

  IDontLike() {
    console.log('I don\'t like function');
    this.postLoveIts--;
  }
}

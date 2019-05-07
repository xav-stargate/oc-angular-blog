import { Component } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-blog';

  posts = Array<Post>();
  constructor() {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rem laudantium';

    this.posts.push(new Post('Mon premier post', content, 1));
    this.posts.push(new Post('Mon second post', content, -5));
    this.posts.push(new Post('Mon troisième post', content, 0));
    this.posts.push(new Post('Mon quatrième post', content, 5));
  }




}

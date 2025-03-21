import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './components/post/post.component';

interface Post {
  img: string;
  name: string;
  time: string;
  text: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data:Array<Post> = [];
// name: any;

  async ngOnInit() {
     this.data = await (await fetch('./assets/data/pots.json')).json();
  }
}

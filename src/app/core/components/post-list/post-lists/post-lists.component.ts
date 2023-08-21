import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.scss'],
})
export class PostListsComponent {
  constructor(private router: Router) {}

  post() {
    this.router.navigate(['/posts/1']);
  }
}

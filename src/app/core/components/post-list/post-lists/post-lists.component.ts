import { PostsService } from './../../../services/posts.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.scss'],
})
export class PostListsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  getPostsSubs: Subscription;
  constructor(private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  post() {
    this.router.navigate(['/posts/1']);
  }

  getPosts() {
    this.getPostsSubs = this.postsService.getPosts().subscribe((resPosts) => {
      this.posts = resPosts;
    });
  }

  ngOnDestroy(): void {
    if (this.getPostsSubs) this.getPostsSubs.unsubscribe();
  }
}

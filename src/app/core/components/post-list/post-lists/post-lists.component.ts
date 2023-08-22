import { ErrorMessage } from './../../../interfaces/interfaces';
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
  loading = false;

  errorMessage: ErrorMessage = {
    name: '',
    message: '',
  };
  isError = false;
  constructor(private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  post() {
    this.router.navigate(['/posts/1']);
  }

  getPosts() {
    this.loading = true;
    this.getPostsSubs = this.postsService.getPosts().subscribe(
      (resPosts) => {
        this.loading = false;
        this.isError = false;

        this.posts = resPosts;
      },
      (err) => {
        this.setError(err);
      }
    );
  }

  setError(err: ErrorMessage) {
    this.loading = false;
    this.isError = true;

    this.errorMessage!.message = err.message;
    this.errorMessage!.name = err.name;
  }

  ngOnDestroy(): void {
    if (this.getPostsSubs) this.getPostsSubs.unsubscribe();
  }
}

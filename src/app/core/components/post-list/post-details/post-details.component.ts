import { PostsService } from './../../../services/posts.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/core/interfaces/interfaces';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  post: Post = {
    userId: 1,
    id: 1,
    title: '',
    body: '',
  };
  private routeSub: Subscription;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPostIdFromRoute();
  }

  back() {
    this.router.navigate(['/posts']);
  }

  getPost(id: number) {
    this.postsService.getPostsById(id).subscribe((postRes) => {
      // console.log(postRes);
      this.post = postRes;
    });
  }

  getPostIdFromRoute() {
    this.routeSub = this.route.params.subscribe((params) => {
      const postId = +params['id'];
      this.getPost(postId);
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) this.routeSub.unsubscribe();
  }
}

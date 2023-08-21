import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListRoutingModule } from './post-list-routing.module';
import { PostDetailsComponent } from './post-details/post-details.component';

import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostListsComponent } from './post-lists/post-lists.component';
import { PostCardComponent } from './post-lists/post-card/post-card.component';

import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [PostDetailsComponent, PostListsComponent, PostCardComponent],
  imports: [
    CommonModule,
    PostListRoutingModule,
    SharedModule,

    //Angular Material Modules
    MatButtonModule,
    MatCardModule,
  ],
})
export class PostListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListRoutingModule } from './post-list-routing.module';
import { PostDetailsComponent } from './post-details/post-details.component';

import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostListsComponent } from './post-lists/post-lists.component';

import { MatCardModule } from '@angular/material/card';
import { PostCardComponent } from './post-lists/post-card/post-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [PostDetailsComponent, PostListsComponent, PostCardComponent],
  imports: [
    CommonModule,
    PostListRoutingModule,
    SharedModule,

    //Angular Material Modules
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
  ],
})
export class PostListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListRoutingModule } from './post-list-routing.module';
import { PostDetailsComponent } from './post-details/post-details.component';

import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostListsComponent } from './post-lists/post-lists.component';

@NgModule({
  declarations: [PostDetailsComponent, PostListsComponent],
  imports: [CommonModule, PostListRoutingModule, MatButtonModule, SharedModule],
})
export class PostListModule {}

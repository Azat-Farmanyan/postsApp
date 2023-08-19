import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListRoutingModule } from './post-list-routing.module';
import { PostListComponent } from './post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PostListComponent, PostDetailsComponent],
  imports: [CommonModule, PostListRoutingModule, MatButtonModule, SharedModule],
})
export class PostListModule {}

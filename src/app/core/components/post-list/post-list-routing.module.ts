import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListsComponent } from './post-lists/post-lists.component';

const routes: Routes = [
  { path: '', component: PostListsComponent },
  {
    path: ':id',
    component: PostDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostListRoutingModule {}

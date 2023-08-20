import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list.component';
import { AuthGuard } from '../../guards/auth.guard';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  {
    path: ':id',
    component: PostDetailsComponent,
  },
];
// const routes: Routes = [
//   { path: '', component: PostListComponent, canActivate: [AuthGuard] },
//   {
//     path: ':id',
//     component: PostDetailsComponent,
//     canActivateChild: [AuthGuard],
//   },
// ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostListRoutingModule {}

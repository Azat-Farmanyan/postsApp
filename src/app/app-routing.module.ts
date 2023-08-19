import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './core/components/post-list/post-details/post-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./core/components/post-list/post-list.module').then(
        (m) => m.PostListModule
      ),
  },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

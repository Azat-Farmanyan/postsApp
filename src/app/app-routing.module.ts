import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './core/components/post-list/post-details/post-details.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'posts',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./core/components/post-list/post-list.module').then(
        (m) => m.PostListModule
      ),
  },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./core/components/login/login.module').then((m) => m.LoginModule),
  // },
  // { path: '', pathMatch: 'full', redirectTo: 'path' },
  // {
  //   path: 'posts/:id',
  //   component: PostDetailsComponent,
  // },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/pages/home/home.component';
import {LoginComponent} from './views/pages/login/login.component';
import {MySpaceComponent} from './views/pages/my-space/my-space.component';
import {NewPostComponent} from './views/pages/new-post/new-post.component';

export enum Route {
  LOGIN = 'login',
  HOME = 'home',
  MY_SPACE='my-space',
  NEW_POST = 'new_post'
}

const routes: Routes = [
  {
    path: Route.LOGIN,
    component: LoginComponent
  },
  {
    path: Route.HOME ,
    component: HomeComponent
  },
  {
    path: Route.MY_SPACE ,
    component: MySpaceComponent
  },
  {
    path: Route.NEW_POST ,
    component: NewPostComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

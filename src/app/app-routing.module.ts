import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/pages/home/home.component';
import {LoginComponent} from './views/pages/login/login.component';

export enum Route {
  LOGIN = 'login',
  HOME = 'home'
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
    path: '**',
    component: LoginComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

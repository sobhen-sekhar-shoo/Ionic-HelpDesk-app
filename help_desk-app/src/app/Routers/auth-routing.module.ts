import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPage} from '../Components/Pages/login/login.page';
import {HomePage} from '../Components/Pages/home/home.page';

const routes: Routes = [
  // {
  //   path: 'login',
  //   pathMatch: 'full',
  //   loadComponent: () => import('../Components/Pages/login/login.page').then((m) => m.LoginPage),
  // },
  // {
  //   path: 'home',
  //   pathMatch: 'full',
  //   loadComponent: () => import('../Components/Pages/home/home.page').then((m) => m.HomePage),
  // },
  {
    path: 'login',
    component : LoginPage,
  },
  {
    path: 'dashboard',
    component : HomePage,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
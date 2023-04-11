import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () => import('./Components/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () => import('./Components/home/home.page').then((m) => m.HomePage),
  },
];

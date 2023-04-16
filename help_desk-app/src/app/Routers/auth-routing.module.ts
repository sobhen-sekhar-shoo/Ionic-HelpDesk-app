import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {HomePage} from '../Components/Pages/home/home.page';

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadComponent: () => import('../Components/Pages/home/home.page').then((m) => m.HomePage),
  },
  // {
  //   path: 'dashboard',
  //   component : HomePage,
  // },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
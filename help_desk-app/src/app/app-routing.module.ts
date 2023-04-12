import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
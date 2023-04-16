import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () => import('./Components/Pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'client',
    loadComponent:() => import('./Components/Layouts/main-layout/main-layout.page').then((m) => m.MainLayoutPage),
    loadChildren: () => import('./Modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {  // Wildcard route for a 404 page
    path: '**',
    loadComponent: () => import('./Components/Common/Errors/page-not-found/page-not-found.page')
    .then((m) => m.PageNotFoundPage), 
 },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage} from './Components/Pages/home/home.page';

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
    loadComponent: () => import('./Components/Pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'client',
    loadComponent : () => import('./Components/Layouts/main-layout/main-layout.page').then((m) => m.MainLayoutPage),
    loadChildren: () => import('./Modules/auth/auth.module').then((m) => m.AuthModule),
    // children: [
    //   {
    //     path: 'home',
    //     pathMatch : 'full',
    //     component : HomePage,
    //   },
    // ]
  },
  {
    path: 'left-menu',
    loadComponent: () => import('./Components/Common/left-menu/left-menu.page').then( m => m.LeftMenuPage)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
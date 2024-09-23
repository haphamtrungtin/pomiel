import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'home',
    loadComponent: () => import('./components/homepage/homepage.component').then(m => m.HomepageComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./components/introduce/introduce.component').then(m => m.IntroduceComponent)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

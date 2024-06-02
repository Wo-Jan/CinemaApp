import { Routes } from '@angular/router';
import { ProfilePage } from './pages/profile/profile.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'comingsoon',
    loadComponent: () => import('./pages/coming-soon/coming-soon.page').then(m => m.ComingsoonPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage)
  },
  {
    path: 'my-tickets',
    loadComponent: () => import('./pages/profile/my-tickets/my-tickets.page').then(m => m.MyTicketsPage)
  },
  {
    path: 'my-credit-cards',
    loadComponent: () => import('./pages/profile/my-credit-cards/my-credit-cards.page').then(m => m.MyCreditCardsPage)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/profile/about-us/about-us.page').then(m => m.AboutUsPage)
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/profile/test/test.page').then(m => m.TestPage)
  },
  // {
  //   path: 'profile',
  //   loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage),
  //   children: [
  //     {
  //       path: '',
  //       loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage)
  //     },
  //     {
  //       path: 'test',
  //       loadComponent: () => import('./profile/test/test.page').then(m => m.TestPage)
  //     },
  //   ]
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   redirectTo: '/home',
  // },
];

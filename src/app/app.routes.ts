import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'comingsoon',
    loadComponent: () => import('./coming-soon/coming-soon.page').then(m => m.ComingsoonPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage)
  },
  {
    path: 'my-tickets',
    loadComponent: () => import('./my-tickets/my-tickets.page').then(m => m.MyTicketsPage)
  },
  {
    path: 'my-credit-cards',
    loadComponent: () => import('./my-credit-cards/my-credit-cards.page').then(m => m.MyCreditCardsPage)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./about-us/about-us.page').then(m => m.AboutUsPage)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

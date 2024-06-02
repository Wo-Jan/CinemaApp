import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { ProfilePage } from "../profile/profile.page";

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../home/home.page').then( m => m.HomePage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'comingsoon',
        loadComponent: () => import('../coming-soon/coming-soon.page').then( m => m.ComingsoonPage)
      },
      {
        path: 'profile',
        component: ProfilePage,
        children: [
          {
            path: 'my-tickets',
            loadComponent: () => import('../my-tickets/my-tickets.page').then( m => m.MyTicketsPage)
          },
          {
            path: 'my-credit-cards',
            loadComponent: () => import('../my-credit-cards/my-credit-cards.page').then( m => m.MyCreditCardsPage)
          },
          {
            path: '',
            redirectTo: 'my-tickets',
            pathMatch: 'full'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
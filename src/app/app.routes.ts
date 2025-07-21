import { Routes } from '@angular/router';
import { MainLayout } from './shared/layouts/main-layout/main-layout';

export const routes: Routes = [
  // Route pour le marketplace avec le MainLayout
  {
    path: '',
    component:MainLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/marketplace/marketplace-module').then(m => m.MarketplaceModule)
      }
    ]
  },

  // Route pour l'admin dashboard avec le DashLayout
  {
    path: 'admin',
    loadComponent: () =>
      import('./shared/layouts/dash-layout/layout').then(m => m.Layout),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/dashboard/dashboard-module').then(m => m.DashboardModule)
      }
    ]
  }
];

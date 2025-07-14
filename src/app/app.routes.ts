import { Routes } from '@angular/router';

export const routes: Routes = [

      {
    path: '',
    loadComponent: () =>
      import('./shared/layout/layout').then(m => m.Layout),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/dashboard/dashboard-module')
            .then(m => m.DashboardModule)
      }
    ]
  }
];

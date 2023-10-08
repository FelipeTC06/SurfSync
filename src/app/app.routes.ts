import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/ui/layout/layout.component').then(c => c.LayoutComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(c => c.DashboardComponent),
  },
  {
    path: 'panel',
    loadComponent: () =>
      import('./components/beach-panel/beach-panel.component').then(c => c.BeachPanelComponent),
  },
]
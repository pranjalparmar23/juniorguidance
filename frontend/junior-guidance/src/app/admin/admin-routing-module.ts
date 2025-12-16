import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterGuard } from '../services/router-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout').then(m => m.Layout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard').then(m => m.Dashboard),
        canActivate: [RouterGuard]
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard').then(m => m.Dashboard),
        canActivate: [RouterGuard]
      },
      {
        path: 'help',
        loadComponent: () =>
          import('./help-details/help-details').then(m => m.HelpDetails),
        canActivate: [RouterGuard]
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

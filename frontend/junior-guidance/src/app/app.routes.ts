import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { RouterGuard } from './services/router-guard';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'login', component: Login},
    {
        path : 'articleHub',
        loadChildren: () => import('./admin/admin-routing-module').then(m => m.routes),
        canActivate: [RouterGuard]
    },
    {path: '**', component: Home} //wildcard route
];

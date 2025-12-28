import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { RouterGuard } from './services/router-guard';
import { Signup } from './signup/signup';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'login', component: Login},
    {path: 'signup', component: Signup},
    {
        path : 'articleHub',
        loadChildren: () => import('./admin/admin-routing-module'),
        canActivate: [RouterGuard]
    },
    {path: '**', redirectTo: ''} //wildcard route
];

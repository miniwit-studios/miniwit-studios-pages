import { Routes } from '@angular/router';

import { AboutComponent } from '../pages/about/about';
import { HomeComponent } from '../pages/home/home';
import { ContactComponent } from '../pages/contact/contact';

import * as github from '../../github/routing/router-config';

export const routerConfig: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'github', children: github.routerConfig}
];

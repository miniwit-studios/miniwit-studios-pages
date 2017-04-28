import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about';
import { HomeComponent } from './pages/home/home';
import { ContactComponent } from './pages/contact/contact';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routerConfig: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'github', loadChildren: '../../github/+github/github.module#GithubModule'},
    {path: '**', component: NotFoundComponent},
];

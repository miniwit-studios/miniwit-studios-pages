import { Routes } from '@angular/router';

import { RepoBrowserComponent } from './pages/repo-browser/repo-browser';
import { RepoListComponent } from './pages/repo-list/repo-list';
import { RepoDetailComponent } from './pages/repo-detail/repo-detail';

export const routerConfig: Routes = [
    {path: '', component: RepoBrowserComponent, children: [
        {path: '', component: RepoListComponent},
        {path: ':org', component: RepoListComponent, children: [
            { path: '', component: RepoDetailComponent },
            { path: ':repo', component: RepoDetailComponent }
        ]}
    ]}
];

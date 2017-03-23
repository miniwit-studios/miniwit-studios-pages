import { Routes } from '@angular/router';

export const routerConfig: Routes = [
    {path: 'github', loadChildren: './+github/github.module#GithubModule'}
];

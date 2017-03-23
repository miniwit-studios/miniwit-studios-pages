import { NgModule } from '@angular/core'

import { RepoBrowserComponent } from './pages/repo-browser/repo-browser';
import { RepoListComponent } from './pages/repo-list/repo-list';
import { RepoDetailComponent } from './pages/repo-detail/repo-detail';

//Imports
import { SharedModule } from 'shared/shared.module';

const module_exports = [RepoBrowserComponent, RepoListComponent, RepoDetailComponent];

@NgModule({
    declarations: [...module_exports],
    imports:      [SharedModule.forRoot()],
    exports:      [...module_exports]
})
export class GithubModule {
}

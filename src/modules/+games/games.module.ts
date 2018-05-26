import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './pages/games/games';

//Imports
import { SharedModule } from 'shared/shared.module';

export const routerConfig: Routes = [
    {path: '', component: GamesComponent}
];

const module_exports = [GamesComponent];

@NgModule({
    declarations: [...module_exports],
    imports:      [RouterModule.forChild(routerConfig), SharedModule.forRoot()],
    exports:      [...module_exports]
})
export class GamesModule {
}

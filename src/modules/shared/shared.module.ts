import { NgModule, ModuleWithProviders } from '@angular/core';

//Imports
import { CoreModule } from './core/core.module';
import { GithubModule } from './github/github.module';

export const module_exports = [];
const imported_modules = [CoreModule.forRoot(), GithubModule.forRoot()];
export const exported_modules = imported_modules.map(mwp => mwp.ngModule);

@NgModule({
    declarations: [...module_exports],
    imports     : [...imported_modules],
    exports     : [...module_exports, ...exported_modules]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: SharedModule };
    }
}

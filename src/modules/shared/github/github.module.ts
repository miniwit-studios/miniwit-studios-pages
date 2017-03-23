import { NgModule, ModuleWithProviders } from '@angular/core';

//Imports
import { CoreModule } from 'shared/core/core.module';

export const module_exports = [];
const imported_modules = [CoreModule.forRoot()];
export const exported_modules = imported_modules.map(mwp => mwp.ngModule);

@NgModule({
    declarations: [...module_exports],
    imports     : [...imported_modules],
    exports     : [...module_exports, ...exported_modules]
})
export class GithubModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: GithubModule };
    }
}

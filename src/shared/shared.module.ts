import { NgModule, ModuleWithProviders } from '@angular/core';

//Imports
import { ReactiveFormsModule } from '@angular/forms';
import { MiterSharedModule, exported_modules as msm_exported_modules } from 'miter-shared-module';

export const module_exports = [];

const imported_modules = [MiterSharedModule.forRoot(), ReactiveFormsModule];
export const exported_modules = [MiterSharedModule, ReactiveFormsModule, ...msm_exported_modules];

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

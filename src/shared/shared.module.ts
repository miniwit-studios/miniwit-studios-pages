import { NgModule, ModuleWithProviders } from '@angular/core';

//Imports
import { ReactiveFormsModule } from '@angular/forms';

export const module_exports = [];

const imported_modules = [ReactiveFormsModule];
export const exported_modules = [ReactiveFormsModule];

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

import { NgModule, ModuleWithProviders } from '@angular/core';

//Imports
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

export const module_exports = [];

export const imported_modules = [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, HttpModule];

@NgModule({
    declarations: [...module_exports],
    imports     : [...imported_modules],
    exports     : [...module_exports, ...imported_modules]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: CoreModule };
    }
}

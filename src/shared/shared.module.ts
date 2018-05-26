import { NgModule, ModuleWithProviders } from '@angular/core';

//Imports
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

export const module_exports = [];

const imported_modules = [FormsModule, CommonModule, HttpClientModule];
export const exported_modules = [FormsModule, CommonModule, HttpClientModule];

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

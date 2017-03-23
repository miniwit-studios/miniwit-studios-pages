import { NgModule } from '@angular/core';

//Imports
import * as github from './github/services.module';

export const module_imports = [github.ServicesModule];

@NgModule({
    imports: [...module_imports]
})
export class ServicesModule {
}

import { NgModule } from '@angular/core';

//Providers
import { GithubService } from './github.service';

const module_providers = [GithubService];

@NgModule({
    providers: [...module_providers]
})
export class ServicesModule {
}

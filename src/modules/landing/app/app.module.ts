import { NgModule } from '@angular/core'

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//Declarations
import { AppComponent } from './pages/app/app';
import { AboutComponent } from './pages/about/about';
import { HomeComponent } from './pages/home/home';
import { ContactComponent } from './pages/contact/contact';

//Imports
import { RoutingModule } from './routing/routing.module';
import { ServicesModule } from 'shared/services.module';
import { SharedModule } from 'shared/shared.module';
import { BrowserModule } from "@angular/platform-browser";
import { GithubModule } from 'landing/github/github.module';

const module_exports = [AppComponent, AboutComponent, HomeComponent, ContactComponent];

@NgModule({
    declarations: [...module_exports],
    imports: [RoutingModule, ServicesModule, SharedModule.forRoot(), BrowserModule, GithubModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}

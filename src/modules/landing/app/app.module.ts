import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//Declarations
import { AppComponent } from './pages/app/app';
import { AboutComponent } from './pages/about/about';
import { HomeComponent } from './pages/home/home';
import { ContactComponent } from './pages/contact/contact';

//Imports
import { routerConfig } from './routing/router-config';
import { ServicesModule } from 'shared/services.module';
import { SharedModule } from 'shared/shared.module';
import { BrowserModule } from "@angular/platform-browser";

const module_exports = [AppComponent, AboutComponent, HomeComponent, ContactComponent];

@NgModule({
    declarations: [...module_exports],
    imports: [RouterModule.forRoot(routerConfig), ServicesModule, SharedModule.forRoot(), BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}

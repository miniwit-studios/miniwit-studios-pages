import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//Declarations
import { AppComponent } from './pages/app/app';
import { LayoutComponent } from './pages/layout/layout';
import { HomeComponent } from './pages/home/home';

import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';

import { NotFoundComponent } from './pages/not-found/not-found';

//Imports
import { routerConfig } from './router-config';
import { ServicesModule } from 'services/services.module';
import { SharedModule } from 'shared/shared.module';
import { BrowserModule } from "@angular/platform-browser";

const module_exports = [AppComponent, LayoutComponent, HomeComponent,
                        AboutComponent, ContactComponent,
                        NotFoundComponent];

@NgModule({
    declarations: [...module_exports],
    imports: [RouterModule.forRoot(routerConfig), ServicesModule, SharedModule.forRoot(), BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}

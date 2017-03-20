import './polyfills.browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

export const platformRef = platformBrowserDynamic();

export function main() {
    console.log(`Launching server in ${CONFIG.env.NODE_ENV} mode`);
    platformRef.bootstrapModule(AppModule)
        .catch(err => {
            console.error(err);
        });
}

// support async tag or hmr
switch (document.readyState) {
case 'interactive':
case 'complete':
    main();
    break;
case 'loading':
default:
    document.addEventListener('DOMContentLoaded', () => main());
}

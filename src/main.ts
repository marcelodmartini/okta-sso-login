import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LoginModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(LoginModule)
  .catch(err => console.error(err));

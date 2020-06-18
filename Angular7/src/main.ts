import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; 
// app.module contains all the stuff (e.g. route, component, template);
// @Component({
//   selector: 'app-payment-details', # how you select this component 
									 // e.g. <div><app-payment-detail></app-payment-detail></div>
//   templateUrl: './payment-details.component.html', # how your component looks like
//   styles: []						  # style file
// })
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS, withFetch  } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { NgxUiLoaderModule, NgxUiLoaderConfig, PB_DIRECTION, SPINNER } from 'ngx-ui-loader';
import { routes } from './app.routes';
import { TokenInterceptor } from './services/token-interceptor';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: 'Loading...',
  textColor: 'white',
  textPosition: 'center-center',
  pbColor: 'white',
  bgsColor: 'white',
  fgsColor: 'white',
  fgsType: SPINNER.ballSpinClockwise,
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    importProvidersFrom(NgxUiLoaderModule.forRoot(ngxUiLoaderConfig))
  ]
};

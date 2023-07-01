import { enableProdMode, isDevMode, importProvidersFrom } from '@angular/core'
import { environment } from './environments/environment'
import { AppComponent } from './app/app.component'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { RouterTestingModule } from '@angular/router/testing'
import { RouterOutlet } from '@angular/router'
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser'
import { ResponseInterceptor } from './app/interceptors/response.interceptor'
import { RequestInterceptor } from './app/interceptors/request.interceptor'
import {
  HTTP_INTERCEPTORS,
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http'

if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      RouterOutlet,
      RouterTestingModule,
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: !isDevMode(),
        autoPause: true,
        trace: false,
        traceLimit: 75,
      })
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err))

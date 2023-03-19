import { isDevMode, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterOutlet } from '@angular/router'
import { AppComponent } from './app.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { RouterTestingModule } from '@angular/router/testing'

import { NgxSliderModule } from '@angular-slider/ngx-slider'
import { PreloaderModule } from './shared/modules/preloader/preloader.module'
import { HeaderModule } from './shared/modules/header/header.module'
import { ChooseSectorModule } from './pages/choose-sector/choose-sector.module'
import { ChoosePlaceModule } from './pages/choose-place/choose-place.module'
import { OrderInfoModule } from './pages/order-info/order-info.module'
import { ResponseInterceptor } from './interceptors/response.interceptor'
import { RequestInterceptor } from './interceptors/request.interceptor'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    PreloaderModule,
    RouterTestingModule,
    NgxSliderModule,
    HeaderModule,
    ChooseSectorModule,
    ChoosePlaceModule,
    OrderInfoModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
  providers: [
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

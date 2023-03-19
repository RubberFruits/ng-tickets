import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http'
import { catchError, map, Observable, shareReplay, throwError } from 'rxjs'

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(
        map(this.handlerMap.bind(this)),
        catchError(this.handlerCatchError.bind(this)),
        shareReplay()
      )
  }

  handlerMap(response: HttpEvent<any>): any {
    if (response instanceof HttpResponse) {
      if (response.status !== 200 && response.status !== 201) {
        throw new HttpErrorResponse({
          error: response.body.status,
        })
      }

      return response.clone({ body: response.body.payload })
    }
  }

  handlerCatchError(error: HttpErrorResponse): any {
    /*if (error.status === 401 && this.auth.getToken()) {
      this.auth.logout()
    }*/

    return throwError(error.error.payload)
  }
}

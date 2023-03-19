import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface ApiInterface {
  path: string
  body?: any
  params?: HttpParams
  forceMockup?: boolean
  mockupData: Observable<any>
}

import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { ApiInterface } from '../models/api.interface'
import { EMPTY, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private mockup = environment.mockup

  constructor(private http: HttpClient) {}

  get(data: ApiInterface): Observable<any> {
    if (this.mockup || data.forceMockup) {
      return data.mockupData || EMPTY
    }

    return this.http.get(data.path, { params: data.body })
  }

  post(data: ApiInterface): Observable<any> {
    if (this.mockup || data.forceMockup) {
      return data.mockupData || EMPTY
    }

    return this.http.post(data.path, data.body)
  }
}

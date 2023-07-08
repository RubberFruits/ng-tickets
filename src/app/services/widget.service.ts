import { Injectable } from '@angular/core'
import { getMockup } from '../helpers/get-mockup'
import { ApiInterface } from '../models/api.interface'
import { GetWidgetDataMockup } from '../mockup/get-widget-data-mockup'
import { ApiService } from './api.service'
import { environment } from '../../environments/environment'
import { BehaviorSubject, map, Observable } from 'rxjs'
import { GetWidgetDataResponseInterface } from '../models/get-widget-data-response.interface'
import { pagesType } from '../models/pages.type'
import { InitialWidgetDataInterface } from '../models/initial-widget-data.interface'
import { SectorStaticDataInterface } from '../pages/choose-sector/models/sector-static-data.interface'

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  isLoading$ = new BehaviorSubject<boolean>(true)
  initialWidgetData$ =
    new BehaviorSubject<GetWidgetDataResponseInterface | null>(null)
  page$ = new BehaviorSubject<pagesType>('initial')
  chosenSector$ = new BehaviorSubject<SectorStaticDataInterface | null>(null)

  matchId: number = 0
  lang: string = 'ru'

  constructor(private api: ApiService) {}

  hidePreloader(): void {
    this.isLoading$.next(false)
  }

  showPreloader(): void {
    this.isLoading$.next(true)
  }

  setPage(page: pagesType): void {
    this.page$.next(page)
  }

  getCurrentPage(): string {
    return this.page$.getValue()
  }

  initWidget(): void {
    const method = '/ajax/getWidgetData/'
    const path = environment.apiUrl + method

    this.matchId = this.getMatchId()
    this.lang = this.getLang()

    const body = {
      matchId: this.matchId,
      lang: this.lang,
    }

    const requestData: ApiInterface = {
      path,
      mockupData: getMockup(method, GetWidgetDataMockup.response.success),
      body,
    }

    this.api.post(requestData).subscribe({
      next: (response: GetWidgetDataResponseInterface) => {
        this.initialWidgetData$.next(response)
        this.setPage('choose-sector')
      },
      error: (response) => {
        this.hidePreloader()
      },
    })
  }

  getMatchId(): number {
    let matchId = 0
    const getParameters = window.location.search

    if (getParameters.includes('matchId')) {
      // @ts-ignore
      matchId = +getParameters
        ?.split('?')
        .find((getParameter) => {
          return getParameter.includes('matchId')
        })
        .split('=')[1]
    }

    return matchId
  }

  getLang(): string {
    if (window.location.pathname.includes('/en/')) {
      return 'en'
    }

    return 'ru'
  }

  getInitialWidgetDataFromService(): Observable<InitialWidgetDataInterface | null> {
    return this.initialWidgetData$.pipe(
      map((response) => (response ? response.payload : null))
    )
  }

  getIsLoadingFromService(): Observable<boolean> {
    return this.isLoading$
  }

  getCurrentPageFromService(): Observable<pagesType> {
    return this.page$
  }

  setChosenSector(sector: SectorStaticDataInterface): void {
    this.chosenSector$.next(sector)
  }

  getChosenSector(): SectorStaticDataInterface | null {
    return this.chosenSector$.getValue()
  }
}

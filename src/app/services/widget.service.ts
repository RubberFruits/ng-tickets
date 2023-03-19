import { Injectable } from '@angular/core'
import { getMockup } from '../helpers/get-mockup'
import { ApiInterface } from '../models/api.interface'
import { GetWidgetDataMockup } from '../mockup/get-widget-data-mockup'
import { ApiService } from './api.service'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  page: string = ''
  isLoading: boolean = true
  matchId: number = 0
  lang: string = 'ru'
  teams = [
    {
      name: '',
      image: '',
    },
    {
      name: '',
      image: '',
    },
  ]

  constructor(private api: ApiService) {}

  hidePreloader(): void {
    this.isLoading = false
  }

  showPreloader(): void {
    this.isLoading = true
  }

  setPage(page: string): void {
    this.page = page
  }

  getCurrentPage(): string {
    return this.page
  }

  initWidget(): void {
    const method = '/ajax/getWidgetData/'
    const path = environment.apiUrl + '/ajax/getWidgetData/'

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
      next: (response) => {
        this.teams = response.payload.matchInfo.teams
        this.hidePreloader()
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
}

import { Component, OnInit } from '@angular/core'
import { environment } from '../environments/environment'
import { ApiInterface } from './models/api.interface'
import { getMockup } from './helpers/get-mockup'
import { GetWidgetDataMockup } from './mockup/get-widget-data-mockup'
import { ApiService } from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentPage: string = 'choose-sector'
  isLoading: boolean = true
  arenaId: string = ''

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.initWidget()
  }

  initWidget(): void {
    const method = '/ajax/getWidgetData/'
    const path = environment.apiUrl + '/ajax/getWidgetData/'

    const body = {
      matchId: this.getMatchId(),
      lang: this.getLang(),
    }

    const requestData: ApiInterface = {
      path,
      mockupData: getMockup(method, GetWidgetDataMockup.response.success),
      body,
    }

    this.api.post(requestData).subscribe({
      next: (response) => {
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

  hidePreloader(): void {
    this.isLoading = false
  }

  showPreloader(): void {
    this.isLoading = true
  }
}

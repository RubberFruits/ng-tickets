import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { ApiService } from './services/api.service'
import { WidgetService } from './services/widget.service'
import { pagesType } from './models/pages.type'
import { InitialWidgetDataInterface } from './models/initial-widget-data.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentPage$: Observable<pagesType>
  isLoading$: Observable<boolean>
  initialWidgetData$: Observable<InitialWidgetDataInterface | null>

  constructor(private api: ApiService, private widgetService: WidgetService) {}

  ngOnInit(): void {
    this.initializeValues()
    this.widgetService.initWidget()
  }

  initializeValues(): void {
    this.initialWidgetData$ =
      this.widgetService.getInitialWidgetDataFromService()
    this.isLoading$ = this.widgetService.getIsLoadingFromService()
    this.currentPage$ = this.widgetService.getCurrentPageFromService()
  }
}

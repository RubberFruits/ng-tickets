import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { ApiService } from './services/api.service'
import { WidgetService } from './services/widget.service'
import { pagesType } from './models/pages.type'
import { InitialWidgetDataInterface } from './models/initial-widget-data.interface'
import { ChooseSectorComponent } from './pages/choose-sector/choose-sector.component'
import { HeaderComponent } from './shared/modules/header/header.component'
import { ChoosePlaceComponent } from './pages/choose-place/choose-place.component'
import { OrderInfoComponent } from './pages/order-info/order-info.component'
import { PreloaderComponent } from './shared/modules/preloader/preloader.component'
import { AsyncPipe, NgIf, NgSwitch, NgSwitchCase } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    ChooseSectorComponent,
    HeaderComponent,
    ChoosePlaceComponent,
    OrderInfoComponent,
    PreloaderComponent,
    AsyncPipe,
    NgIf,
    NgSwitchCase,
    NgSwitch,
  ],
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

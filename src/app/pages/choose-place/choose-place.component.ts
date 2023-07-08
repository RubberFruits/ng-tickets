import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ChoosePlaceService } from './services/choose-place.service'
import { GetPlacesResponseInterface } from './models/get-places-response.interface'
import { PlaceInterface } from './models/place.interface'
import { WidgetService } from '../../services/widget.service'

@Component({
  selector: 'app-choose-place',
  templateUrl: './choose-place.component.html',
  styleUrls: ['./choose-place.component.scss'],
})
export class ChoosePlaceComponent implements OnInit {
  @Input('arenaIdProps') arenaId!: string

  places: PlaceInterface[] | null = null
  settings = {
    xMax: '0',
    yMax: '0',
  }

  constructor(
    private choosePlaceService: ChoosePlaceService,
    private widgetService: WidgetService
  ) {}

  ngOnInit(): void {
    this.choosePlaceService.getPlacesData(this.arenaId).subscribe((data) => {
      this.places = data.places
      this.settings = data.settings

      this.widgetService.hidePreloader()
    })

    /*this.breakpointObserver
      .observe(['(max-width: 999px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches
      })*/
  }
}

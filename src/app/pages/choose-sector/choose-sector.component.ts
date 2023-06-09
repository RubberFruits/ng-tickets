import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { SectorStaticDataInterface } from './models/sector-static-data.interface'
import { ChooseSectorService } from './services/choose-sector.service'
import { getRightTerm } from '../../helpers/helper'
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'
import { WidgetService } from '../../services/widget.service'

@Component({
  selector: 'app-choose-sector',
  templateUrl: './choose-sector.component.html',
  styleUrls: ['./choose-sector.component.scss'],
})
export class ChooseSectorComponent implements OnInit {
  @Input('arenaIdProps') arenaId!: string

  isMobile: boolean
  sectors$: Observable<SectorStaticDataInterface[]>
  activeSector: SectorStaticDataInterface | null = null
  popupData = {
    isActive: false,
    x: 0,
    y: 0,
  }

  constructor(
    private chooseSectorService: ChooseSectorService,
    private breakpointObserver: BreakpointObserver,
    private widgetService: WidgetService
  ) {}

  ngOnInit(): void {
    this.sectors$ = this.chooseSectorService.getSectorsFromService()
    this.chooseSectorService.getSectorsData(this.arenaId)

    this.breakpointObserver
      .observe(['(max-width: 999px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches
      })
  }

  getInitialSectorColor(sector: SectorStaticDataInterface): string {
    return this.chooseSectorService.getInitialSectorColor(sector)
  }

  getInitialSectorStrokeParams(sector: SectorStaticDataInterface) {
    return this.chooseSectorService.getInitialSectorStrokeParams(sector)
  }

  highlightSector(sector: SectorStaticDataInterface): void {
    this.chooseSectorService.handleSectorHover(sector)
    if (!sector.isStatic) {
      this.showPopup(sector)
    }
  }

  sectorBlur(): void {
    this.chooseSectorService.handleSectorBlur()
    this.hidePopup()
  }

  showPopup(sector: SectorStaticDataInterface): void {
    this.activeSector = Object.assign({}, sector)
    this.popupData.isActive = true
  }

  hidePopup(): void {
    this.activeSector = Object.assign({}, null)
    this.popupData.isActive = false
  }

  setPopupPosition(event: MouseEvent): void {
    if (this.popupData.isActive) {
      this.popupData.x = event.clientX
      this.popupData.y = event.clientY
    }
  }

  getFreePlacesText(sector: SectorStaticDataInterface): string {
    if (sector && sector.freePlaces && sector.freePlaces !== '0') {
      return `${sector.freePlaces} ${getRightTerm(
        +sector.freePlaces,
        'место',
        'места',
        'мест'
      )} свободно`
    } else {
      return 'Нет свободных мест'
    }
  }

  navigateToChoosePlace(sector: SectorStaticDataInterface): void {
    this.widgetService.showPreloader()
    this.widgetService.setPage('choose-place')
  }
}

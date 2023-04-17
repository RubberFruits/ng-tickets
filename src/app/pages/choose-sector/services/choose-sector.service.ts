import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

import { SectorStaticDataInterface } from '../models/sector-static-data.interface'
import { SectorsStrokeParamsInterface } from '../models/sectors-stroke-params.interface'
import { ARENA_CONFIG } from '../../../config/arena-config'
import { environment } from '../../../../environments/environment'
import { ApiInterface } from '../../../models/api.interface'
import { getMockup } from '../../../helpers/get-mockup'
import { WidgetService } from '../../../services/widget.service'
import { GetSectorsFromServerMockup } from '../mockup/get-sectors-from-server-mockup'
import { ApiService } from '../../../services/api.service'
import { SectorDataFromServerInterface } from '../models/sector-data-from-server.interface'

@Injectable({
  providedIn: 'root',
})
export class ChooseSectorService {
  private sectors: SectorStaticDataInterface[]
  sectors$ = new BehaviorSubject<SectorStaticDataInterface[]>([])
  sectorPrices$ = new BehaviorSubject<{ minPrice: number; maxPrice: number }>({
    minPrice: 999999,
    maxPrice: 0,
  })
  sectorSettings = {
    stroke: { color: '#27365B', opacity: 1, width: 1, dasharray: '0' },
    colorHovered: '#2E416F',
    colorDisabled: '#0b193b',
  }

  constructor(private widgetService: WidgetService, private api: ApiService) {}

  getSectorsData(arenaId: string): void {
    const method = '/ajax/getSectors'
    const path = environment.apiUrl + method

    const matchId = this.widgetService.getMatchId()

    const body = {
      matchId: matchId,
    }

    const requestData: ApiInterface = {
      path,
      mockupData: getMockup(
        method,
        GetSectorsFromServerMockup.response.success
      ),
      body,
    }

    this.api.post(requestData).subscribe((response) => {
      this.handleSectorsDataFromServer(response.payload.sectors, arenaId)
    })
  }

  updateSectorsData(newSectorsData: SectorStaticDataInterface[]): void {
    this.sectors = newSectorsData
    this.sectors$.next(this.sectors)
  }

  handleSectorsDataFromServer(
    sectorsDataFromServer: SectorDataFromServerInterface[],
    arenaId: string
  ): void {
    this.checkSectorsAvailableWithDataFromServer(sectorsDataFromServer, arenaId)
    this.getMinMaxSectorPrices(sectorsDataFromServer)
    this.widgetService.hidePreloader()
  }

  checkSectorsAvailableWithDataFromServer(
    sectorsDataFromServer: SectorDataFromServerInterface[],
    arenaId: string
  ): void {
    ARENA_CONFIG[arenaId].sectors.forEach((sectorItemConfigData) => {
      //ищем среди данных по секторам с сервера сектор в стат конфиге
      const sectorDataFromServer = sectorsDataFromServer.find(
        (sectorItemFromServer: SectorDataFromServerInterface) =>
          +sectorItemFromServer.id === +sectorItemConfigData.id
      )

      //если нашли - переносим данные, если нет - делаем сектор недоступным
      if (sectorDataFromServer) {
        sectorItemConfigData.freePlaces = sectorDataFromServer.freePlaces
        sectorItemConfigData.minPrice = sectorDataFromServer.minPrice
        sectorItemConfigData.maxPrice = sectorDataFromServer.maxPrice
      } else {
        sectorItemConfigData.isAvailable = false
        sectorItemConfigData.color = ARENA_CONFIG[arenaId].colorDisabled
      }
    })

    this.updateSectorsData(ARENA_CONFIG[arenaId].sectors)
  }

  getMinMaxSectorPrices(sectors: SectorDataFromServerInterface[]): void {
    let max = 0
    let min = 999999

    for (let i = 0; i < sectors.length; i++) {
      if (
        max < +sectors[i].maxPrice &&
        +sectors[i].maxPrice &&
        +sectors[i].maxPrice !== 0 &&
        sectors[i].maxPrice !== ''
      ) {
        max = +sectors[i].maxPrice
      }

      if (
        min > +sectors[i].minPrice &&
        +sectors[i].minPrice &&
        sectors[i].minPrice !== '0' &&
        +sectors[i].minPrice !== 0
      ) {
        min = +sectors[i].minPrice
      }
    }

    this.sectorPrices$.next({
      minPrice: Math.floor(min),
      maxPrice: Math.ceil(max),
    })
  }

  filterSectorsByPrice(chosenMin: number, chosenMax: number): void {
    this.sectors.forEach((sectorData) => {
      if (sectorData?.minPrice && sectorData?.maxPrice) {
        if (
          (+sectorData!.minPrice < chosenMin &&
            +sectorData!.maxPrice < chosenMin) ||
          (+sectorData!.minPrice > chosenMax &&
            +sectorData!.maxPrice > chosenMax)
        ) {
          sectorData.color = this.sectorSettings.colorDisabled
          sectorData.textColor = 'white'
          sectorData.isSectorInPriceBounds = false
        } else {
          sectorData.color = sectorData.defaultColor
          sectorData.textColor = sectorData.defaultTextColor
          sectorData.isSectorInPriceBounds = true
        }
      }
    })

    this.updateSectorsData(this.sectors)
  }

  getMinMaxSectorPricesFromService(): Observable<{
    minPrice: number
    maxPrice: number
  }> {
    return this.sectorPrices$
  }

  getSectorsFromService(): Observable<SectorStaticDataInterface[]> {
    return this.sectors$
  }

  isSectorAvailableOnRender(id: number | string): boolean {
    const isAvailable = this.sectors.find(
      (sector) => sector.id === id
    )!.isAvailable

    return !(id === null || id === 0 || typeof id === 'string' || !isAvailable)
  }

  getInitialSectorColor(sector: SectorStaticDataInterface): string {
    if (this.isSectorAvailableOnRender(sector.id)) {
      return sector.color
    } else {
      return this.sectorSettings.colorDisabled
    }
  }

  getInitialSectorStrokeParams(
    sector: SectorStaticDataInterface
  ): SectorsStrokeParamsInterface {
    //если сектор доступен и в границах выбранных цен - не показываем границу
    if (
      this.isSectorAvailableOnRender(sector.id) &&
      sector.isSectorInPriceBounds
    ) {
      return {
        color: '',
        opacity: 0,
        width: 0,
        dasharray: '',
      }
    } else {
      return this.sectorSettings.stroke
    }
  }

  handleSectorHover(sector: SectorStaticDataInterface): void {
    if (!this.isSectorAvailableOnRender(sector.id)) return

    this.sectors.forEach((sectorData) => {
      if (sectorData.id === sector.id) return
      sectorData.color = this.sectorSettings.colorHovered
      sectorData.textColor = 'white'
    })

    this.updateSectorsData(this.sectors)
  }

  handleSectorBlur(): void {
    this.sectors.forEach((sectorData) => {
      sectorData.color = sectorData.defaultColor
      sectorData.textColor = sectorData.defaultTextColor
    })

    this.updateSectorsData(this.sectors)
  }
}

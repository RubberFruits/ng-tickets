import { Injectable } from '@angular/core'

import { SectorStaticDataInterface } from '../models/sector-static-data.interface'
import { SectorsStrokeParamsInterface } from '../models/sectors-stroke-params.interface'
import { ARENA_CONFIG } from '../../../config/arena-config'

@Injectable({
  providedIn: 'root',
})
export class ChooseSectorService {
  constructor() {}

  SECTORS_DATA = Object.assign({}, ARENA_CONFIG['23'])
  sectorSettings = {
    stroke: { color: '#27365B', opacity: 1, width: 1, dasharray: '0' },
    colorHovered: '#2E416F',
    colorDisabled: '#0b193b',
  }

  getSectorsStaticData(): SectorStaticDataInterface[] {
    return this.SECTORS_DATA.sectors
  }

  isSectorAvailableOnRender(id: number | string): boolean {
    return !(id === null || id === 0 || typeof id === 'string')
  }

  getInitialSectorColor(sector: SectorStaticDataInterface): string {
    if (this.isSectorAvailableOnRender(sector.id)) {
      return sector.color
    } else {
      return this.sectorSettings.colorDisabled
    }
  }

  getInitialSectorStrokeParams(
    sectorId: number | string
  ): SectorsStrokeParamsInterface {
    if (this.isSectorAvailableOnRender(sectorId)) {
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

  handleSectorHover(sectorId: number | string): void {
    if (typeof sectorId === 'string') return

    this.SECTORS_DATA.sectors.forEach((sectorData) => {
      if (sectorData.id === sectorId) return
      sectorData.color = this.SECTORS_DATA.colorHovered
      sectorData.textColor = 'white'
    })
  }

  handleSectorBlur(): void {
    this.SECTORS_DATA.sectors.forEach((sectorData) => {
      sectorData.color = sectorData.defaultColor
      sectorData.textColor = sectorData.defaultTextColor
    })
  }
}

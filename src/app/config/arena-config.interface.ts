import { SectorStaticDataInterface } from '../pages/choose-sector/models/sector-static-data.interface'

export interface ArenaConfigInterface {
  [key: string]: {
    arenaImage: string
    isMetallArena: boolean
    colorDisabled: string
    colorHovered: string
    stroke: {
      color: string
      opacity: number
      width: number
      dasharray: string
    }
    sectors: SectorStaticDataInterface[]
  }
}

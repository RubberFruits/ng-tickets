import { TeamsInterface } from './teams.interface'
import { UserInterface } from './user.interface'
import { SectorStaticDataInterface } from '../pages/choose-sector/models/sector-static-data.interface'

export interface WidgetStateInterface {
  arenaId: string
  page: pagesType
  previousPage: pagesType
  matchId: number
  isLoading: boolean
  sectors: SectorStaticDataInterface[] | null
  sectorSettings: {
    stroke: { color: string; opacity: number; width: number; dasharray: string }
    colorHovered: string
    colorDisabled: string
  }
  chosenSector: {}
  chosenTickets: []
  lang: string
  userInfo: UserInterface
  isUserAuthorized: boolean
  matchInfo: {
    teams: TeamsInterface[] | []
    date: string
  }
  partners: string[] | []
  isCovidBannerActive: boolean
  minPrice: number
  maxPrice: number
  isWidgetInited: boolean
  isPlacesPageInited: boolean
  isOrderInfoPageInited: boolean
  isPaymentStatusSuccess: boolean
  sendPaymentStatusCount: number
  isAbonement: boolean
  abonementData: AbonementDataInterface | null
}

type pagesType =
  | 'choose-sector'
  | 'choose-place'
  | 'order-info'
  | 'error-page'
  | 'tickets-page'

interface AbonementDataInterface {
  seat: string
  sector: string
  zoneId: string
  categoryId: string
  limit: number
  name: string
  year: string
  img: string
}

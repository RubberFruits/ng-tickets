import { TeamsInterface } from './teams.interface'
import { UserInterface } from './user.interface'

export interface InitialWidgetDataInterface {
  discountTickets: number
  countBuyTickets: number
  matchInfo: {
    teams: TeamsInterface[]
    date: string
  } | null
  partners: string[]
  user: UserInterface
  arenaId: string
  status: string
}

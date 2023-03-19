import { TeamsInterface } from './teams.interface'
import { UserInterface } from './user.interface'

export interface GetWidgetDataResponseInterface {
  payload: {
    discountTickets: number
    countBuyTickets: number
    matchInfo: {
      teams: TeamsInterface[]
      date: string
    }
    partners: string[]
    user: UserInterface
    arenaId: string
    status: string
  }
}

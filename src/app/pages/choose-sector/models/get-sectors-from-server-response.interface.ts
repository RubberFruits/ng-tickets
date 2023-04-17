import { SectorDataFromServerInterface } from './sector-data-from-server.interface'

export interface GetSectorsFromServerResponseInterface {
  payload: {
    sectors: SectorDataFromServerInterface[]
    status: string
  }
}

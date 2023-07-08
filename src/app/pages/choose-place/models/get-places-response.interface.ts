import { PlaceInterface } from './place.interface'

export interface GetPlacesResponseInterface {
  places: PlaceInterface[]
  settings: {
    yMax: string
    xMax: string
  }
}

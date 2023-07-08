import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { ApiInterface } from '../../../models/api.interface'
import { getMockup } from '../../../helpers/get-mockup'
import { WidgetService } from '../../../services/widget.service'
import { ApiService } from '../../../services/api.service'
import { GetPlacesMockup } from '../mockup/get-places.mockup'
import { Observable } from 'rxjs'
import { PlaceInterface } from '../models/place.interface'
import { GetPlacesResponseInterface } from '../models/get-places-response.interface'

@Injectable({
  providedIn: 'root',
})
export class ChoosePlaceService {
  constructor(private widgetService: WidgetService, private api: ApiService) {}

  getPlacesData(arenaId: string): Observable<GetPlacesResponseInterface> {
    const method = '/ajax/getPlaces'
    const path = environment.apiUrl + method

    const matchId = this.widgetService.getMatchId()
    const chosenSector = this.widgetService.getChosenSector()

    const body = {
      sectorId: chosenSector?.id,
      matchId: matchId,
      arenaId: +arenaId,
    }

    const requestData: ApiInterface = {
      path,
      mockupData: getMockup(method, GetPlacesMockup.response.success),
      body,
    }

    return this.api.post(requestData)
  }
}

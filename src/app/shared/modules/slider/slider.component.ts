import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ChangeContext, NgxSliderModule, Options } from 'ngx-slider-v2'
import { ChooseSectorService } from '../../../pages/choose-sector/services/choose-sector.service'
import { NumberFormatPipe } from '../../pipes/number-format.pipe'
import { AsyncPipe, NgIf } from '@angular/common'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [NumberFormatPipe, NgIf, NgxSliderModule, AsyncPipe],
})
export class SliderComponent implements OnInit, OnDestroy {
  options: Options = {
    floor: 2600,
    ceil: 11500,
    hideLimitLabels: true,
    hidePointerLabels: true,
  }

  sectorPrices$: Observable<{ minPrice: number; maxPrice: number }>

  constructor(private chooseSectorService: ChooseSectorService) {}

  ngOnInit(): void {
    this.sectorPrices$ =
      this.chooseSectorService.getMinMaxSectorPricesFromService()
    this.sectorPrices$.subscribe((sectorPrices) => {
      const newOptions: Options = Object.assign({}, this.options)

      newOptions.floor = sectorPrices.minPrice
      newOptions.ceil = sectorPrices.maxPrice
      this.options = newOptions
    })
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    const chosenMin = changeContext.value
    const chosenMax = changeContext.highValue

    this.chooseSectorService.filterSectorsByPrice(chosenMin!, chosenMax!)
  }

  ngOnDestroy() {}
}

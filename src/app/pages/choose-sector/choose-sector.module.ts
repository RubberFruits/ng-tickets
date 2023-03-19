import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChooseSectorComponent } from './choose-sector.component'
import { SectorPopupComponent } from './components/sector-popup/sector-popup.component'
import { ButtonModule } from '../../shared/modules/button/button.module'
import { SliderModule } from '../../shared/modules/slider/slider.module'
import { SectorFilterPopupComponent } from './components/sector-filter-popup/sector-filter-popup.component'
import { PreloaderModule } from '../../shared/modules/preloader/preloader.module'

@NgModule({
  declarations: [
    ChooseSectorComponent,
    SectorPopupComponent,
    SectorFilterPopupComponent,
  ],
  exports: [ChooseSectorComponent],
  imports: [CommonModule, ButtonModule, SliderModule, PreloaderModule],
})
export class ChooseSectorModule {}

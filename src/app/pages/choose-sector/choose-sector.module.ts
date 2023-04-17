import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ChooseSectorComponent } from './choose-sector.component'
import { ButtonModule } from '../../shared/modules/button/button.module'
import { SliderModule } from '../../shared/modules/slider/slider.module'
import { SectorFilterPopupComponent } from './components/sector-filter-popup/sector-filter-popup.component'
import { PopupModule } from '../../shared/modules/popup/popup.module'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [ChooseSectorComponent, SectorFilterPopupComponent],
  exports: [ChooseSectorComponent],
  imports: [
    CommonModule,
    ButtonModule,
    SliderModule,
    PopupModule,
    SharedModule,
  ],
})
export class ChooseSectorModule {}

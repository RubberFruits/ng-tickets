import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header.component'
import { MatchInfoModule } from './components/match-info/match-info.module'
import { ReturnBlockModule } from './components/return-block/return-block.module'
import { SliderModule } from '../slider/slider.module'
import { TitleWithServicesModule } from './components/title-with-services/title-with-services.module'

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatchInfoModule,
    ReturnBlockModule,
    SliderModule,
    TitleWithServicesModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}

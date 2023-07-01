import { Component, Input } from '@angular/core'
import { MatchInfoInterface } from '../../../models/match-info.interface'
import { TitleWithServicesComponent } from './components/title-with-services/title-with-services.component'
import { SliderComponent } from '../slider/slider.component'
import { MatchInfoComponent } from './components/match-info/match-info.component'
import { ReturnBlockComponent } from './components/return-block/return-block.component'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    TitleWithServicesComponent,
    SliderComponent,
    MatchInfoComponent,
    ReturnBlockComponent,
    NgIf,
  ],
})
export class HeaderComponent {
  @Input('matchInfoProps') matchInfo: MatchInfoInterface | null = null
  isHided = true
}

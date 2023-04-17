import { Component, Input } from '@angular/core'
import { MatchInfoInterface } from '../../../models/match-info.interface'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input('matchInfoProps') matchInfo: MatchInfoInterface | null = null
  isHided = true
}

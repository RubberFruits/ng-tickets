import { Component, Input } from '@angular/core'
import { MatchInfoInterface } from '../../../../../models/match-info.interface'

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.scss'],
})
export class MatchInfoComponent {
  @Input('matchInfoProps') matchInfo: MatchInfoInterface | null = null
  constructor() {}
}

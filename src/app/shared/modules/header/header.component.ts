import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { MatchInfoInterface } from '../../../models/match-info.interface'
import { pagesType } from '../../../models/pages.type'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input('matchInfoProps') matchInfo: MatchInfoInterface | null = null
  @Input('currentPageProps') currentPage: pagesType | null = null
  isHided = true
}

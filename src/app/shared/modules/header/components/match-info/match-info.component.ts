import { Component, Input } from '@angular/core'
import { MatchInfoInterface } from '../../../../../models/match-info.interface'
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-match-info',
    templateUrl: './match-info.component.html',
    styleUrls: ['./match-info.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        LanguageSwitcherComponent,
    ],
})
export class MatchInfoComponent {
  @Input('matchInfoProps') matchInfo: MatchInfoInterface | null = null
  constructor() {}
}

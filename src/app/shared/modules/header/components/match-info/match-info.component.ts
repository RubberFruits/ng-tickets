import { Component } from '@angular/core'

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.scss'],
})
export class MatchInfoComponent {
  matchInfo: {
    teams: [
      {
        name: 'крылья советов'
        image: './assets/img/mockup/init-widget-pics/wings.svg'
      },
      {
        name: 'арсенал тула'
        image: './assets/img/mockup/init-widget-pics/arsenal.svg'
      }
    ]
    date: '30 ОКТ, сб, 20:00'
  }
  constructor() {}
}

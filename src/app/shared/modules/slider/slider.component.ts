import { Component } from '@angular/core'
import { ChangeContext, Options } from '@angular-slider/ngx-slider'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  minValue: number = 2600
  maxValue: number = 11500
  options: Options = {
    floor: 2600,
    ceil: 11500,
    hideLimitLabels: true,
    hidePointerLabels: true,
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    /*console.log(changeContext)*/
  }
}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PopupComponent } from './popup.component'
import { SliderModule } from '../slider/slider.module'
import { ButtonModule } from '../button/button.module'

@NgModule({
  declarations: [PopupComponent],
  imports: [CommonModule, SliderModule, ButtonModule],
  exports: [PopupComponent],
})
export class PopupModule {}

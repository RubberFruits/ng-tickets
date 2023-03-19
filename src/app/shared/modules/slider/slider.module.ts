import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SliderComponent } from './slider.component'
import { NgxSliderModule } from '@angular-slider/ngx-slider'
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../../shared.module'

@NgModule({
  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [CommonModule, NgxSliderModule, FormsModule, SharedModule],
})
export class SliderModule {}

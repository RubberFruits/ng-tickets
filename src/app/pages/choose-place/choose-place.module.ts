import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChoosePlaceComponent } from './choose-place.component'

@NgModule({
  declarations: [ChoosePlaceComponent],
  exports: [ChoosePlaceComponent],
  imports: [CommonModule],
})
export class ChoosePlaceModule {}

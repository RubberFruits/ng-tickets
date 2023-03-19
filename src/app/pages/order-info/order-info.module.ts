import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OrderInfoComponent } from './order-info.component'

@NgModule({
  declarations: [OrderInfoComponent],
  exports: [OrderInfoComponent],
  imports: [CommonModule],
})
export class OrderInfoModule {}

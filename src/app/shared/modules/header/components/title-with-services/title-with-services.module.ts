import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TitleWithServicesComponent } from './title-with-services.component'
import { LanguageSwitcherModule } from '../language-switcher/language-switcher.module'

@NgModule({
  declarations: [TitleWithServicesComponent],
  imports: [CommonModule, LanguageSwitcherModule],
  exports: [TitleWithServicesComponent],
})
export class TitleWithServicesModule {}

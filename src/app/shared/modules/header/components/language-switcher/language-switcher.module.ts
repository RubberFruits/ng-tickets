import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LanguageSwitcherComponent } from './language-switcher.component'

@NgModule({
  declarations: [LanguageSwitcherComponent],
  exports: [LanguageSwitcherComponent],
  imports: [CommonModule],
})
export class LanguageSwitcherModule {}

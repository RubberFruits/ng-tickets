import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatchInfoComponent } from './match-info.component'
import { LanguageSwitcherModule } from '../language-switcher/language-switcher.module'

@NgModule({
  declarations: [MatchInfoComponent],
  exports: [MatchInfoComponent],
  imports: [CommonModule, LanguageSwitcherModule],
})
export class MatchInfoModule {}

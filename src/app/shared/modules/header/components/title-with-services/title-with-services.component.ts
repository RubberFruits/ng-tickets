import { Component } from '@angular/core'
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
    selector: 'app-title-with-services',
    templateUrl: './title-with-services.component.html',
    styleUrls: ['./title-with-services.component.scss'],
    standalone: true,
    imports: [LanguageSwitcherComponent],
})
export class TitleWithServicesComponent {
  title = 'Выберите сектор'
}

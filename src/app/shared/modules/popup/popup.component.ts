import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss'],
    standalone: true,
})
export class PopupComponent {
  @Input('isActiveProps') isActive: boolean = false
}

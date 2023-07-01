import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' = 'button'
  @Input() disabled: boolean = false
  @Input() theme: 'main' | '' = 'main'

  @Output() clicked: EventEmitter<any> = new EventEmitter<any>()

  onClick(): void {
    this.clicked.emit()
  }
}

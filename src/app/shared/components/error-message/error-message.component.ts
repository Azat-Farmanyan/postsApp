import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ErrorMessage } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Output() onReload = new EventEmitter();

  @Input() errorMessage: ErrorMessage = {
    name: '',
    message: '',
  };

  reload() {
    this.onReload.emit();
  }
}

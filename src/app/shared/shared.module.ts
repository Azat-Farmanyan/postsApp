import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { LogoutModalComponent } from './components/header/logout-modal/logout-modal.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HeaderComponent, LogoutModalComponent, ErrorMessageComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule],
  exports: [HeaderComponent, LogoutModalComponent, ErrorMessageComponent],
})
export class SharedModule {}

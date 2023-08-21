import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { LogoutModalComponent } from './components/header/logout-modal/logout-modal.component';

@NgModule({
  declarations: [HeaderComponent, LogoutModalComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [HeaderComponent, LogoutModalComponent],
})
export class SharedModule {}

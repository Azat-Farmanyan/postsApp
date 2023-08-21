import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showLogoutModal: boolean = false;

  constructor(private router: Router) {}

  logout() {
    this.showLogoutModal = true;
  }
  cancel() {
    this.showLogoutModal = false;
  }

  backHome() {
    this.router.navigate(['/posts']);
  }
}

import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [animate(300, style({ opacity: 0 }))]),
    ]),
  ],
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

  goToPosts() {
    this.router.navigate(['/posts']);
  }
}

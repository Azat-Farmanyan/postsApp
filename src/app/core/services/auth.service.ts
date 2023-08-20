import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = new BehaviorSubject(localStorage.getItem('isAuth'));

  login() {
    localStorage.setItem('isAuth', 'true');
    this.isAuth.next('true');
  }

  logout() {
    localStorage.removeItem('isAuth');
    this.isAuth.next('false');
  }
}

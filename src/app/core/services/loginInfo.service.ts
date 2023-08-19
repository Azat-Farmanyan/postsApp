import { Injectable } from '@angular/core';
import { LoginInfo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginInfoService {
  private storageKey = 'userLogin';

  constructor() {}

  saveLoginInfo(email: string, password: string): void {
    const loginInfo = { email, password };
    localStorage.setItem(this.storageKey, JSON.stringify(loginInfo));
  }

  getLoginInfo(): LoginInfo | null {
    const loginInfoJson = localStorage.getItem(this.storageKey);
    return loginInfoJson ? JSON.parse(loginInfoJson) : null;
  }

  clearLoginInfo(): void {
    localStorage.removeItem(this.storageKey);
  }
}

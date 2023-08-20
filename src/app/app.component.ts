import { AuthService } from './core/services/auth.service';
import { LoginInfoService } from './core/services/loginInfo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Posts-App';

  constructor(
    private loginInfoService: LoginInfoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginInfoService.saveLoginInfo('test@gmail.com', '12345678');
    // this.authService.logout();
  }
}

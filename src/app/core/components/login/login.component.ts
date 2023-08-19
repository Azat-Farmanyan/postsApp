import { AuthService } from './../../services/auth.service';
import { LoginInfoService } from '../../services/loginInfo.service';
import { Component, HostListener, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginInfo } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { Observable, Subscription, fromEvent } from 'rxjs';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginInfo: LoginInfo;

  invalidEmail = false;
  invalidPassword = false;

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  mobileView = false;

  matcher = new MyErrorStateMatcher();

  constructor(
    private loginInfoService: LoginInfoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.windowResizable();

    this.loginForm = new FormGroup({
      email: new FormControl('test@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('12345678', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    this.loginInfo = this.loginInfoService.getLoginInfo() as LoginInfo;

    if (window.innerWidth < 700) {
      this.mobileView = true;
    }
  }

  windowResizable() {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((e) => {
      if (window.innerWidth <= 700) {
        this.renderMobileView();
      } else {
        this.renderDesktopView();
      }
    });
  }

  renderMobileView() {
    this.mobileView = true;
  }

  renderDesktopView() {
    this.mobileView = false;
  }

  submit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (
        email === this.loginInfo.email &&
        password === this.loginInfo.password
      ) {
        console.log('login success');
        this.authService.login();
        this.router.navigate(['/posts']);
      }
      if (email !== this.loginInfo.email) this.invalidEmail = true;
      if (password !== this.loginInfo.password) this.invalidPassword = true;
    }
  }

  hideEmailError() {
    this.invalidEmail = false;
  }
  hidePasswordError() {
    this.invalidPassword = false;
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }
}

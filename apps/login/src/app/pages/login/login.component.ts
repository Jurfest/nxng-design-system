import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedComponentsModule } from '@nxng-ds/shared/components';
import { map, of } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'nxng-ds-login',
  standalone: true,
  imports: [
    CommonModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  // Login simulation
  isUserLoggedIn$ = of(false);

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  handleLogin(): void {
    console.log('ok');
    console.log(this.loginForm.controls.password.value);
    console.log(this.loginForm.controls.email.value);


    if (this.loginForm.valid) {
      console.log('here');

      this.isUserLoggedIn$ = this.authService
        .fakeLogin(
          String(this.loginForm.controls.password.value),
          String(this.loginForm.controls.email.value)
        )
        .pipe(map(() => true));
    }
  }
}

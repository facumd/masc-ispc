import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResData } from '../../../models/auth/auth.model';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  token: string;
  error: string = null;
  success: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  onLogin() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe({
      next: (data: AuthResData) => {
        (this.token = data.token),
          console.log(data),
          this.router.navigate(['/profile']);
      },
      error: (errorRes) => {
        this.error = errorRes;
      },
    });
    this.loginForm.reset();
  }
}

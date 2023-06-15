import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthResData } from 'src/app/models/auth.model';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['signup.component.css'],
  providers: [],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  error: string = '';
  success: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwords: this.formBuilder.group(
        {
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', Validators.required],
        },
        { validators: this.passwordCheck }
      ),
    });
  }

  onSignup() {
    console.log(this.signupForm);
    this.authService
      .signup({
        email: this.signupForm.value.email,
        username: this.signupForm.value.username,
        first_name: this.signupForm.value.firstName,
        last_name: this.signupForm.value.lastName,
        password: this.signupForm.value.passwords.password,
      })
      .subscribe({
        next: (data: AuthResData) => {
          this.success = 'Signup was successful';
          this.error = '';
          this.router.navigate(['/login']);
        },
        error: (errorRes) => {
          this.error = errorRes;
          alert(errorRes);
        },
      });
  }

  passwordCheck(control: AbstractControl): { [s: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { notsame: true };
    }
    return null;
  }
}

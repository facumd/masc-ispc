import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResData } from '../../../models/auth/auth.model';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {
  signupForm: FormGroup;
  error: string = null;
  success: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      passwords: this.formBuilder.group(
        {
          password: [null, [Validators.required, Validators.minLength(8)]],
          confirmpassword: [null, Validators.required],
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
        name: this.signupForm.value.name,
        password: this.signupForm.value.passwords.password,
      })
      .subscribe({
        next: (data: AuthResData) => {
          this.success = 'Signup was successful';
          this.error = null;
          this.router.navigate(['/login']);
        },
        error: (errorRes) => {
          this.error = errorRes;
        },
      });
  }

  passwordCheck(control: FormGroup): { [s: string]: boolean } {
    if (control.get('password').value != control.get('confirmpassword').value) {
      return { notsame: true };
    }
    return null;
  }
}

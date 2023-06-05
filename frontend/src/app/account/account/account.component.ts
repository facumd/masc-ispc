import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../../app/models/auth/auth.model';
import { AuthService } from '../../../app/services/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit, OnDestroy {
  user: User;
  userSub: Subscription;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((data: User) => {
      this.user = data;
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}

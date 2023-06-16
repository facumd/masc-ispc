import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/auth.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  user!: User;
  userSub!: Subscription;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((data) => {
      this.user = data || {};
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}

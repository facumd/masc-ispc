import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';

import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, RouterModule, ProfileRoutingModule],
})
export class ProfileModule {}

import { Component } from '@angular/core';
import { authUser } from '../model/UserAuth';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private router: Router) {
    if (authUser.length < 1) this.router.navigate(['/login'])
  }
  getUser() {
    return authUser;
  }
}

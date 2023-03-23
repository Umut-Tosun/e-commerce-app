import { Component } from '@angular/core';
import { authUser } from '../model/UserAuth';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

getUser(){
  return authUser;
}
}

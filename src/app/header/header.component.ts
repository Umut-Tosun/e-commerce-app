import { Component } from '@angular/core';
import { first } from 'rxjs';
import { CartList } from '../model/Cart.DataSource';
import { UserList } from '../model/User.DataSource';
import { authUser } from '../model/UserAuth';
import { Router } from '@angular/router';
import { RoleList } from '../model/Role.DataSource';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css']
})
export class HeaderComponent {
  isAnyUserAuthentication:boolean=false;
  isAnyAdminAuthentication:boolean=false;
  FirstName:any='';
  LastName:any='';

  constructor(private router: Router) { }

  checkAnyUserAuthentication(){
    if(authUser.length>0){
      this.isAnyUserAuthentication=true;
      this.FirstName=authUser[0].FirstName;
      this.LastName=authUser[0].LastName;
      if(authUser[0].Role==RoleList[1]) {this.isAnyAdminAuthentication=true;
      }
      return this.isAnyUserAuthentication;
    }
    else{
      this.isAnyUserAuthentication=false;
      return this.isAnyUserAuthentication;
    }
  }

  CartLength(){
    if (authUser.length > 0)
      return CartList.filter(x => x.Status == true && x.user == authUser[0]).length; //otantike olan
    else
      return CartList.filter(x => x.Status == true && x.user==UserList[2]).length; //guest
  }

  logOut(){
    for (var i = authUser.length; i > 0; i--) {
 
     authUser.pop();
      
     }
     this.router.navigate(['/login']);
  }
}

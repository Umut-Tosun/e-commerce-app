import { Component } from '@angular/core';
import { UserList } from '../model/User.DataSource';
import { authUser } from '../model/UserAuth';
import { Router } from '@angular/router';
import { CartList } from '../model/Cart.DataSource';
import { RoleList } from '../model/Role.DataSource';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {
    if (authUser.length > 0){ this.router.navigate(['/profile']);}
   }

  isLogin: boolean = false;
  login(gmail: any, password: any) {
    UserList.forEach((user) => {

      console.log(user.Email+''+gmail+''+user.Password+''+password);
      
      if (user.Email == gmail && user.Password == password) {
        authUser.push(user);
        this.isLogin = true;
        if(authUser[0].Role==RoleList[0])  this.router.navigate(['/profile']);
        else this.router.navigate(['/admin-products']);
       
         CartList.filter(x=>x.user?.Id==2).forEach((item)=>{
          item.user=authUser[0];
         })
      }
    })
    if(this.isLogin)alert('Giriş Yapıldı')
    else alert('bilgiler hatalı')
  }
}

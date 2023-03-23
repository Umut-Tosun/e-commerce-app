import { Component } from '@angular/core';
import { User } from '../model/User';
import { UserList } from '../model/User.DataSource';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isNewEmail:boolean=true;

  constructor(private router: Router) { }

  register(firstName: string, lastName: string, imagePath: string, gmail: string, password: string, confirmPassword: string) {

    UserList.forEach((user)=>{
      if(user.Email==gmail){
        this.isNewEmail=false;
      }
    })

    if (password != confirmPassword)alert('Şifreler uyuşmuyor')
    else if(password.length<6) alert('Şifre en az 6 karakter içermelidir.')
    else if(!this.isNewEmail) alert('Bu mail adresi zaten alınmış')
    else if(firstName==''||lastName=='') alert('İsim ve soyisim zorunlu alandır.')
    else{

      UserList.push(new User(UserList.length+1,firstName,lastName,gmail,password,imagePath,[]))
      this.router.navigate(['/login']);

    }


  }
}

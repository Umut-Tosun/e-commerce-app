import { Component } from '@angular/core';
import { User } from '../model/User';
import { UserList } from '../model/User.DataSource';
import { Router } from '@angular/router';
import { RoleList } from '../model/Role.DataSource';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isNewEmail:boolean=true;
  Swal = Swal;

  constructor(private router: Router) { }

  register(firstName: string, lastName: string, imagePath: string, gmail: string, password: string, confirmPassword: string) {

    UserList.forEach((user)=>{
      if(user.Email==gmail){
        this.isNewEmail=false;
      }
    })

    if (password != confirmPassword) Swal.fire("Hesap Oluşturulamadı!", "Şifreler Uyuşmuyor!", "error");
    else if(password.length<6) Swal.fire("Hesap Oluşturulamadı!", "Şifreler en az 6 karakter içermelidir!", "error");
    else if(!this.isNewEmail) Swal.fire("Hesap Oluşturulamadı!", "Bu mail adresi zaten alınmış!", "error");
    else if(firstName==''||lastName=='') Swal.fire("Hesap Oluşturulamadı!", "İsim bilgileri zorunlu alandır!", "error");
    else{

      UserList.push(new User(UserList.length+1,firstName,lastName,gmail,password,imagePath,[],RoleList[0]))
      this.router.navigate(['/login']);
      Swal.fire("Hesap Oluşturuldu!", "Hesap oluşturuldu!", "success");
    }


  }
}

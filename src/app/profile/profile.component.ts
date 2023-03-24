import { Component } from '@angular/core';
import { authUser } from '../model/UserAuth';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductList } from '../model/Product.DataSource';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  index: any;
  Swal = Swal;

  constructor(private router: Router) {
    if (authUser.length < 1) this.router.navigate(['/login'])
  }
  getUser() {
    return authUser;
  }
  editUserInformation(firstName: any, lastName: any, gmail: any, iPath: any) {
    this.index = ProductList.findIndex((user) => user.Id == authUser[0].Id)
    if (gmail.length != '' && firstName != '' && lastName != '') {
      authUser[this.index].FirstName = firstName;
      authUser[this.index].LastName = lastName;
      authUser[this.index].Email = gmail;
      authUser[this.index].ImagePath = iPath;

      Swal.fire("Bilgiler Başarıyla Güncellendi", "Bilgiler Güncellendi!", "success");
    }
    else {
      Swal.fire("Güncelleme Başarısız", "Boş alanlar mevcut!", "error");
    }

  }
  editUserPassword(oldPassword:any,newPassword:any,newPasswordConfirm:any){
    this.index = ProductList.findIndex((user) => user.Id == authUser[0].Id)

    if(authUser[this.index].Password==oldPassword){
      if(newPassword==newPasswordConfirm){
        authUser[this.index].Password = newPassword;

        Swal.fire("Şifre Başarıyla Güncellendi", "Şifre Güncellendi!", "success");
        this.logOut();
      }
      else{
        Swal.fire("Şifreler Uyuşmuyor", "Şifreler uyuşmuyor!", "error");
      }
    }
    else{
      Swal.fire("Eski şifrenizi kontrol ediniz", "Eski şifre doğru değil!", "error");
    }
  }
  logOut(){
    for (var i = authUser.length; i > 0; i--) {
 
     authUser.pop();
      
     }
     Swal.fire("Sistemden çıkış yapıldı", "Çıkış yapıldı!", "success");
     this.router.navigate(['/login']);
  }
}

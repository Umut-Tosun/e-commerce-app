import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoleList } from '../model/Role.DataSource';
import { authUser } from '../model/UserAuth';
import { CategoryList } from '../model/Category.DataSource';
import { Category } from '../model/Category';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(private router: Router) {
    if(authUser.length<1)this.router.navigate(['/login'])
    else if(authUser[0].Role!=RoleList[1])this.router.navigate(['/login'])
   }
   addCategory(name:any,desc:any,iPath:any){
     CategoryList.push(new Category(CategoryList.length+1,name,iPath,desc,[],''))
    this.router.navigate(['']);
    alert('Ürün Başarıyla Eklendi')
  }
}

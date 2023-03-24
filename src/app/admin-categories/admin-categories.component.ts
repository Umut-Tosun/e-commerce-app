import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryList } from '../model/Category.DataSource';
import { RoleList } from '../model/Role.DataSource';
import { authUser } from '../model/UserAuth';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent {
  constructor(private router: Router) {
    if (authUser.length < 1) this.router.navigate(['/login'])
    else if (authUser[0].Role != RoleList[1]) this.router.navigate(['/login'])
  }
  getCategories() {
    return CategoryList.filter(x => x.Status == true);
  }
  removeCategory(id: any) {
    if (confirm('Kategori Silinsin mi ?')) {
      CategoryList[CategoryList.findIndex((category) => category.Id == id)].Status = false;
    }
    else{
      alert('iptal edildi')
    }
  }
}

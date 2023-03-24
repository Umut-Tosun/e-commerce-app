import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../model/Category';
import { CategoryList } from '../model/Category.DataSource';
import { RoleList } from '../model/Role.DataSource';
import { authUser } from '../model/UserAuth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  @Input() category?: Category;
  index:any;
  Swal = Swal;

  constructor(
    private orderService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) {
    if (authUser.length < 1) { this.router.navigate(['/login']); }
    else if (authUser[0].Role!=RoleList[1])this.router.navigate(['']);

  }
  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderService.getCategoryById(Number(id))
      .subscribe(category => this.category = category)
  }
  editCategory(name:any,ImagePath:any,desc:any,color:any){
    this.index=CategoryList.findIndex((category)=>category.Id==category.Id)

    CategoryList[this.index].Name=name;
    CategoryList[this.index].ImagePath=ImagePath;
    CategoryList[this.index].Description=desc;
    CategoryList[this.index].Color=color;

    Swal.fire("Bilgiler Başarıyla Değiştirildi.", "Güncelleme Başarılı!", "success");
  }
}

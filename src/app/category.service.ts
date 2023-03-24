import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './model/Category';
import { CategoryList } from './model/Category.DataSource';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategoryList():Observable<Category[]>{
    
    return of(CategoryList.filter(x=>x.Status==true));
  
   
  }

  getCategoryById(id:number):Observable<Category | undefined>{
    return of(CategoryList.find(deger=>deger.Id===id));
  }
}

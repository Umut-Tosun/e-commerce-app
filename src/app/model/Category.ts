import { Product } from "./Product";

export class Category{
    constructor(public Id:number,public Name:string,public ImagePath:String,public Description:string,public ProductListWithByCategory:Product[],public Color:string) { 
    }
}
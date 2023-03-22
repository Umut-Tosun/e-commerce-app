import { Category } from "./Category";

export class Product{
    constructor(public Id:number,public Category:Category,public Name:string,public Description:string,public ImagePath:string,public UnitPrice:number,public Stock:number,public Status:boolean) {
    }
}
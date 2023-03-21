import { Product } from "./Product";

export class Cart{
    constructor(public Id:number,public Product:Product,public Quantity:number,public TotalPrice:number,public Status:boolean){}
}
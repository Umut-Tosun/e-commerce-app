import { Product } from "./Product";
import { User } from "./User";

export class Cart{
    constructor(public Id:number,public user:User,public Product:Product,public Quantity?:number,public TotalPrice?:number,public Status?:boolean){}

}
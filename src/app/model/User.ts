import { Order } from "./Order";
import { Role } from "./Role";

export class User{
    constructor(public Id:number,public FirstName:string,public LastName:string,public Email:string,public Password:string,public ImagePath:string,public Orders:Order[],public Role:Role) {
      
    }
}
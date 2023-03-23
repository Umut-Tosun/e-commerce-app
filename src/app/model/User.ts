import { Order } from "./Order";

export class User{
    constructor(public Id:number,public FirstName:string,public LastName:string,public Email:string,public Password:string,public ImagePath:string,public Orders:Order[]) {
      
    }
}
import { Cart } from "./Cart";
import { User } from "./User";

export class Order{
    constructor(public Id:Number,public OrderDate:any,public User:User,public CartList:Cart[]=CartList.filter(X=>X.Status==true),public TotalPrice:Number){

    }
}
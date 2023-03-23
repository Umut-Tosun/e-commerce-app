import { User } from "./User";
import { Order } from "./Order";
import { RoleList } from "./Role.DataSource";
export const UserList:User[]=[
    {Id:1,FirstName:'Umut',LastName:'Tosun',Email:'umut.tosun@gmail.com',Password:'umut1905',ImagePath:"https://i.hizliresim.com/dljd92z.png",Orders:[],Role:RoleList[0]},
    {Id:2,FirstName:'Guest',LastName:'Guest',Email:'guestguest',Password:'guestguest',ImagePath:"https://i.hizliresim.com/dljd92z.png",Orders:[],Role:RoleList[0]},
    {Id:2,FirstName:'Yusuf',LastName:'Gökçimen',Email:'yusufgkcm@gmail.com',Password:'yusufgök',ImagePath:"https://i.hizliresim.com/395monw.png",Orders:[],Role:RoleList[0]},
    {Id:3,FirstName:'Doğan',LastName:'Çetin',Email:'dgncetin@gmail.com',Password:'okul1900',ImagePath:"https://i.hizliresim.com/qouek8c.png",Orders:[],Role:RoleList[0]},
    {Id:4,FirstName:'admin',LastName:'admin',Email:'admin',Password:'admin',ImagePath:"https://i.hizliresim.com/qouek8c.png",Orders:[],Role:RoleList[1]},
]
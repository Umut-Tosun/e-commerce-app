import { CategoryList } from "./Category.DataSource";
import { Product } from "./Product";

export const ProductList:Product[]=[
    {Id:1,Category:CategoryList[0],Name:"Monster Abra A7",Description:"Intel® Alder Lake Core™ i7-12700H 14C/20T;<br/>24MB L3; E-CORE Max 3.50GHZ P-CORE Max 4.7GHZ;45W ;<br/>10nm SuperFin<br/>"+
   "4 GB RTX 3050 Ti 128-Bit Max-P 80Watt + 15 Watt DB 2.0<br/>"+
   " 17,3 FHD 1920x1080 144Hz IPS Mat LED Ekran<br/>"+
   " 8GB (1x8GB) DDR4 1.2V 3200MHz SODIMM<br/>"+
   " 512GB SAMSUNG PM9B1 M.2 SSD PCIe 4.0 x4<br/>"+
    "FreeDos (İşletim sistemi bulunmamaktadır.<br/>",ImagePath:"https://img-monsternotebook.mncdn.com/UPLOAD/urun-gorselleri-yeni/a5-V19.1-resimler/thumb/V19.X-3050-TI-EKRANKART_small.png",UnitPrice:22000,Stock:20,Status:true},

    {Id:2,Category:CategoryList[1],Name:"Çamaşır Makinesi",Description:"Test Açıklaması",ImagePath:"https://i.hizliresim.com/n0c3t89.png",UnitPrice:15000,Stock:50,Status:true},
    {Id:3,Category:CategoryList[2],Name:"Doğum Günü hediyesi",Description:"Test Açıklaması",ImagePath:"https://www.oregondairy.com/wp-content/uploads/2019/09/Untitled-design-27-300x200.jpg",UnitPrice:450,Stock:30,Status:true},
    {Id:4,Category:CategoryList[3],Name:"Yaş Köpek Maması",Description:"Test Açıklaması",ImagePath:"https://benimhayvanlarim.com/wp-content/uploads/2020/01/köpek-maması-300x200.jpg",UnitPrice:300,Stock:20,Status:true},
    {Id:5,Category:CategoryList[4],Name:"Erkek Mont",Description:"Test Açıklaması",ImagePath:"https://www.centone.com.tr/UserFiles/Fotograflar/thumbs/115045-300-200-jpg-300-200.jpg",UnitPrice:900,Stock:200,Status:true},
    {Id:6,Category:CategoryList[5],Name:"Delgi Matkap",Description:"Test Açıklaması",ImagePath:"https://i.hizliresim.com/qv92bgr.png",UnitPrice:2455,Stock:200,Status:true},
]
    

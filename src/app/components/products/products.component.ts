import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/view_models/store';
import {IProduct} from 'src/app/view_models/iproduct'
import {DiscountOffers} from 'src/app/view_models/discount-offers'
import {ICategory} from 'src/app/view_models/category'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  store = new Store("mostafa",["cairo","giza"],"assets/profile.png");
  catlist:ICategory[];
  products:IProduct[];
  nodiscount:boolean=false;
  isPurchase:boolean=false;
  selectCatID:number = 0;
  totalPrice:number=0
  orderDate:Date;
  total:number=0
  nationalID:string='29801100101431';
  cardnumber:string='1234567890536478';
  constructor() { 
    this.catlist=[
     {id:1, name:"mobiles"},
     {id:2, name:"laptops"}
    ]
    this.products =[
    {ID:1, Name:'iphone 13', quantity:10, Price:15000, img:'https://picsum.photos/150/100', categoryID:1, discount:DiscountOffers.discount1},
    {ID:2, Name:'lenovo laptop', quantity:5, Price:15500, img:'https://picsum.photos/150/100', categoryID:2, discount:0},
    {ID:3, Name:'lenovo mobile', quantity:1, Price:5500, img:'https://picsum.photos/150/100', categoryID:1, discount:DiscountOffers.discount1},
    {ID:4, Name:'samsung s21 ultra', quantity:0, Price:21200, img:'https://picsum.photos/150/100', categoryID:1, discount:DiscountOffers.discount2},
    {ID:5, Name:'HP laptop', quantity:1, Price:16000, img:'https://picsum.photos/150/100', categoryID:2, discount:0},
    {ID:6, Name:'Dell laptop', quantity:4, Price:18000, img:'https://picsum.photos/150/100', categoryID:2, discount:DiscountOffers.discount2}
  ]
  this.orderDate = new Date()
  }

  ngOnInit(): void {
  }

purchased(products:IProduct, price:number){
  this.total+=products.Price
  products.quantity= products.quantity-1
}

productTrack(index:number, prod:IProduct):number
{
  return prod.ID
}

togglecat(){
  this.selectCatID=1?2:1
}

}

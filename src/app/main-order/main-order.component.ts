import { Component, OnInit, OnChanges } from '@angular/core';
//import { ProductsComponent } from '../components/products/products.component';
import {ICategory} from 'src/app/view_models/category'
import { IProduct } from '../view_models/iproduct';
@Component({
  selector: 'app-main-order',
  templateUrl: './main-order.component.html',
  styleUrls: ['./main-order.component.scss']
})

export class MainOrderComponent implements OnInit{
  totalprice:number=0
  cat:ICategory[];
  selectedCat:number=0;
  priceRecieved:number=0;
  addedProd:{}={};
  showprod:IProduct[]=[]
  prodQuantity:number=0;
  nationalID: string = '29611100101431';
  cardnumber: string = '1234567890536478';
  constructor() {
this.cat=[
  {id:1, name:"mobiles"},
  {id:2, name:"laptops"}
]

   }

  ngOnInit(): void {
  }


  incval(product:IProduct){
    debugger;
   
     this.totalprice= this.totalprice+product.Price;
    //  this.prodPrice = product.Price
     product.quantity++
     console.log(this.prodQuantity)
  }

decval(product:IProduct){
      this.totalprice= this.totalprice-product.Price

      product.quantity--;
    //  this.disprice=this.prodQuantity-1
    console.log(this.prodQuantity)
}

  deleteprod(product:IProduct, price:number, i:number){
    this.showprod.splice(i);
    this.totalprice =this.totalprice- product.quantity * price;
    alert(`item ${i} removed successfuly`)
  }


  showout(){

  }

addToCart(product:IProduct){
//  this.addedProd=product
//   this.prodName=product.Name
//   this.prodImg=product.img
//   this.prodPrice=product.Price*product.quantity
//   this.prodQuantity=product.quantity

  // let itemarr:IProduct ={Name: this.prodName, img: this.prodImg, Price: this.prodPrice, quantity: this.prodQuantity}
  debugger
  if(product.quantity!=0){
    this.showprod.push(product );
    this.totalprice+=product.Price*product.quantity;

  }
}
  getTotalPrice(total:number){
    this.priceRecieved=total
  }
}

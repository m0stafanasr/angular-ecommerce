import { Injectable } from '@angular/core';
import { IProduct } from '../view_models/iproduct';
import { DiscountOffers } from '../view_models/discount-offers';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:IProduct[]=[]
  constructor() {
    this.products = [
      { ID: 1, Name: 'iphone 13', quantity: 10, Price: 15000, img: 'https://picsum.photos/150/100', categoryID: 1, discount: DiscountOffers.discount1 },
      { ID: 2, Name: 'lenovo laptop', quantity: 5, Price: 15500, img: 'https://picsum.photos/150/100', categoryID: 2, discount: 0 },
      { ID: 3, Name: 'lenovo mobile', quantity: 1, Price: 5500, img: 'https://picsum.photos/150/100', categoryID: 1, discount: DiscountOffers.discount1 },
      { ID: 4, Name: 'samsung s21 ultra', quantity: 7, Price: 21200, img: 'https://picsum.photos/150/100', categoryID: 1, discount: DiscountOffers.discount2 },
      { ID: 5, Name: 'HP laptop', quantity: 3, Price: 16000, img: 'https://picsum.photos/150/100', categoryID: 2, discount: 0 },
      { ID: 6, Name: 'Dell laptop', quantity: 4, Price: 18000, img: 'https://picsum.photos/150/100', categoryID: 2, discount: DiscountOffers.discount2 }
    ]
   }

   showProducts():IProduct[]{
     return this.products
   }

   getprodCat(catID:number):IProduct[]{
    if(catID==0){
      return this.products
    } else{
      return this.products.filter(prod => prod.categoryID == catID)
    }
   }

}

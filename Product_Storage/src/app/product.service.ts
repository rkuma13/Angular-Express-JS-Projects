import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Array to Products to share products between new and view components
  products: Product[];

//variable to store the index of the product to be edited
editIndex: number = -1 ;

//a counter variable to generate unique id for each product
counter: number = 0;

  constructor(private router: Router,
    private localStorage: LocalStorageService) { 

 //Fetch the products from the LocalStorage.
 this.products = this.localStorage.retrieve('products');
 //If no products are loaded, then create an empty array
 if(! this.products)
 this.products = Array();
    }
    syncProducts(){
      //Products are updated in the local storage
    this.localStorage.store('products',this.products);
    }

  add(p:Product){

    p.id=++this.counter;
    this.products.push(p);
    //Products are updated in the local storage
    this.syncProducts();

  }
  remove(p:Product){

      //index of the product in the array is obtained
      const index = this.products.indexOf(p);
    
    //using the index, element is removed from the array
    this.products.splice(index,1);
    //Products are updated in the local storage
    this.syncProducts();

  }

  edit(p: Product) {
    // index of the product to be updated is obtained
    this.editIndex = this.products.indexOf(p);
    // route is changed to the new component.
    this.router.navigate(['new']); 
   }
 
   update(p: Product) {
    // array element is updated
    this.products.splice(this.editIndex,1,p);

    //Products are updated in the local storage
    this.syncProducts();
    
    // edit index is changed to -1
    this.editIndex = -1;
    // route is changed to the view component.
    this.router.navigate(['view']); 

    
   }
}

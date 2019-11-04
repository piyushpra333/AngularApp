import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceCartService} from '../service-cart.service';
import { products } from '../products';

@Component({
  selector:'app-details',
  templateUrl:'./product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService:ServiceCartService
  ) { }

  addToCart(product){
    window.alert("Product Added successfully!!!");
    return this.cartService.addToCart(product);
  }

 

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
}


}
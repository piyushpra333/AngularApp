import { Component, OnInit } from '@angular/core';
import {ServiceCartService} from '../service-cart.service';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkOutForm;
   constructor(
    private http:HttpClient,
    private cartService:ServiceCartService,
    private formBuilder:FormBuilder,
  ) { }

  ngOnInit() {
    this.items=this.cartService.getItems();
    this.checkOutForm=this.formBuilder.group({
      name:'',
      address:'',
    })
  }
  onSubmit(customerData){
    console.warn("your data has been submitted", customerData);
    this.items=this.cartService.getShippingPrices();
    this.items=this.cartService.clearCart();
    this.checkOutForm.reset();

  }
}
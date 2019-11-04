import { Component, OnInit } from '@angular/core';
import {ServiceCartService} from '../service-cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  ShippingCost;
  constructor(
    private shipping:ServiceCartService
  ) { }

  ngOnInit() {
    this.ShippingCost=this.shipping.getShippingPrices();
  }

}

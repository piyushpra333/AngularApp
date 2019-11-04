import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceCartService {
Items=[];
constructor(
  private http:HttpClient
  )
{}
addToCart(products){
  this.Items.push(products);
}
getItems(){
  return this.Items;
}
clearCart(){
  this.Items=[];
  return this.Items;
}
getShippingPrices(){
  return this.http.get('/assets/shipping.json');

}

}
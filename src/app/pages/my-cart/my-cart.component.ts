import { CartService } from "./../service/cart.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Product } from "../service/product.interface";
import {FormsModule} from '@angular/forms'
@Component({
  selector: "app-my-cart",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./my-cart.component.html",
  styleUrl: "./my-cart.component.scss",
})
export class MyCartComponent {
  public cartProducts: any[] = this.cartService.getCartProducts().items;
  public totalAmount = this.cartService.getCartProducts().totalAmount;
  public price: any[] = [];
  public sumOfPrice:any
  public quantity :any
  constructor(private cartService: CartService, private router: Router) {
    this.cartProducts.filter((res) => {
      const data = res.price;
      this.price.push(data);
      this.sumOfPrice = this.price.reduce((acc: any, item: any) => acc + item);
      console.log(this.sumOfPrice)
    });
  }

  public backTo() {
    this.router.navigateByUrl("/");
  }

  public removeItem(item: any) {
    this.cartService.removeItemFromCart(item);
  }

  public removeQuanity(item:any){
    console.log(item)
    this.cartService.removeQuantity(item)
  }

  calculateTotalAmount() {
    this.totalAmount = this.cartProducts.reduce(
      (acc: any, item: any) => acc + item.price * item.quantity,
      0
    );
  }

  incrementQuantity(item: Product): void {
    item.quantity++;


    this.calculateTotalAmount();
  }

  updateQuantity(item: Product): void {
    item.quantity++;
    this.calculateTotalAmount();
  }

  decrementQuantity(item: Product): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
   
    this.calculateTotalAmount();
  }
}

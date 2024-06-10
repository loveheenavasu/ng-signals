import { CartService } from './../service/cart.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  standalone: true,
  imports: [],
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.scss'
})
export class MyCartComponent {
  public cartProducts = this.cartService.getCartProducts().items;

  constructor(private cartService: CartService , private router:Router ) {
    console.log(this.cartProducts, "cartproucts")
  }

  public backTo(){
    this.router.navigateByUrl('/')
  }

  public removeItem(item:any){
    this.cartService.removeItemFromCart(item)
  }
}

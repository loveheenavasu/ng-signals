import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
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

  constructor(private cartService: CartService , private router:Router ) {}

  public backTo(){
    this.router.navigateByUrl('/')
  }
}

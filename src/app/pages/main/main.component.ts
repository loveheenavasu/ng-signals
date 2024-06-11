import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ProductsComponent } from '../index';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet , ProductsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public cartProducts = this.cartService.getCartProducts().items;

  constructor(private router:Router,private cartService:CartService){
    console.log(this.cartProducts)
  }

  public myCart(){
    this.router.navigateByUrl('/my-cart')
  }
}

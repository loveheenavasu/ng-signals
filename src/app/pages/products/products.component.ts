import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
import { Product, ShoppingCart } from '../service/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  public products = this.cartService.getProducts();
  cart!:any[];

  constructor(private cartService: CartService,private router:Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCartProducts().items
  }

  public isProductInCart(product: Product): boolean {
    return this.cart.some((item) => item.id === product.id);
  }


  public addToCart(product:any){
    this.cartService.addToCart(product);
    this.router.navigateByUrl('/my-cart')
  }
}

import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
import { Product } from '../service/product.interface';
import Swal from 'sweetalert2'
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
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast:any) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      text: "Added to cart!"
    });
    
    this.router.navigateByUrl('/my-cart')
  }
}

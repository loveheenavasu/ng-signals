import { Injectable, signal } from '@angular/core';
import { Product, ShoppingCart } from './product.interface';
import { products } from './products.item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products = signal<Product[]>(products);

  private cart = signal<ShoppingCart>({
    items: [],
    totalAmount: 0
  });

  public getProducts() {
    return this.products();
  }

  public getCartProducts(){
    return this.cart()
  }

  public addToCart(item: Product) {
    this.cart.update((cart: ShoppingCart) => {
      cart.items.push(item);
      cart.totalAmount += item.price;
      console.log(cart , "CART")
      return cart;
    });
  }
}
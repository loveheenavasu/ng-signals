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


  constructor(){
    this.getTotalAmount()
  }


public getTotalAmount(){
return this.cart()
}

  public getProducts() {
    return this.products();
  }

  public getCartProducts(){
    return this.cart()
  }

  public addToCart(item: Product) {
    this.cart.update((cart: ShoppingCart) => {
      const existingItemIndex = cart.items.findIndex((i) => i.id === item.id);
      if (existingItemIndex!== -1) {
        const existingItem = cart.items[existingItemIndex];
        existingItem.quantity++;
        cart.totalAmount += item.price; 
      } else {
        cart.items.push({...item, quantity: 1 });
        cart.totalAmount += item.price; 
      }
      cart.totalAmount = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return cart;
    });
  }

  public removeItemFromCart(item:Product){
    this.cart.update((cart: ShoppingCart) => {
      const existingItemIndex = cart.items.findIndex((i) => i.id === item.id);
      if (existingItemIndex!== -1) {
        cart.items.splice(existingItemIndex, 1);
        cart.totalAmount -= item.price;
      }
      return cart;
    });
  }

  public removeQuantity(item: Product) {
    this.cart.update((cart: ShoppingCart) => {
      const existingItemIndex = cart.items.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        const existingItem = cart.items[existingItemIndex];
     
          // If the quantity is already 0, remove the item from the cart
          cart.items.splice(existingItemIndex, 1);
    
      }
      return cart;
    });
  }


}
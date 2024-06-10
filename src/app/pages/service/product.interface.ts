export interface Product {
    id: any;
    name: string;
    price: number;
    quantity: number;
    imageUrl:any
  }
  
  export interface ShoppingCart {
    items: Product[];
    totalAmount: any;
  }
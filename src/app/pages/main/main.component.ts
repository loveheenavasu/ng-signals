import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ProductsComponent } from '../index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet , ProductsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private router:Router){}

  public myCart(){
    this.router.navigateByUrl('/my-cart')
  }
}

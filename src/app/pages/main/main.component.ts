import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ProductsComponent } from '../index';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet , ProductsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

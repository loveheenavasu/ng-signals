import { Routes } from '@angular/router';
import { MainComponent, MyCartComponent, ProductsComponent } from './pages/index';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>MainComponent,
        children:[
            {
                path:'',
                loadComponent:()=>ProductsComponent,
            },
            {
                path:'my-cart',
                loadComponent:()=>MyCartComponent,
            }
        ]
    }
];

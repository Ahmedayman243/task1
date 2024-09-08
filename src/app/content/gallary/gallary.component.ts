import { Component } from '@angular/core';
import { RecommendedProductsComponent } from '../recommended-products/recommended-products.component';
import { defer } from 'rxjs';
import { Product } from '../interface/product';

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [RecommendedProductsComponent,],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {


  list:Product[]=[
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:4000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:2000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3002, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:4000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:2000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3002, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:4000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:2000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3002, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port3.png'},
  ];






}

import { Component } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.css'
})
export class RecommendedProductsComponent {

  list:Product[]=[
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port2.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:4000, image :'assets/img/port2.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:2000, image :'assets/img/port2.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3002, image :'assets/img/port2.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port2.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port2.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port2.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port2.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port2.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port2.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port2.png'},
    {id : 11 , name :'dell' , cat :'laptop' ,price:3000, image :'assets/img/port2.png'},
    
  ]

}

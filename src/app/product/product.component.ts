import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
products=[
  {id:1, price:15,quantity:0,like:0,dislike:0},
    {id:2, price:15,quantity:12,like:0,dislike:0},
      {id:3, price:15,quantity:12,like:0,dislike:0},
]
buyProduct(idofproduct:any){
//console.log(idofproduct)
let index=this.products.indexOf(idofproduct)
this.products[index].quantity--
}
indexProduct(index:any){
//console.log(idofproduct)
this.products[index].quantity--
}
}

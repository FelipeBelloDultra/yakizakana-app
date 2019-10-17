import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor() { }

  public cartList = [
    {nome: 'Nome do produto', preco: 20, img: 'https://www.gravatar.com/avatar/24?d=monsterid&f=y'},
    {nome: 'Nome do produto', preco: 22, img: 'https://www.gravatar.com/avatar/24?d=monsterid&f=y'},
    {nome: 'Nome do produto', preco: 17, img: 'https://www.gravatar.com/avatar/24?d=monsterid&f=y'}
  ]

  public itens: number = 0;
  public amount: number = 0;


  public removeCart() {
    // delete this.cartList;
  }

  ngOnInit() {
    for (let prod of this.cartList) {
      this.amount = this.amount + prod.preco;
      this.itens++;
    }
  
  }

}

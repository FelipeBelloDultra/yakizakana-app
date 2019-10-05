import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor() { }

  public cart = [
    {nome: 'test0', preco: 20, img: 'https://www.gravatar.com/avatar/24?d=monsterid&f=y'},
    {nome: 'test1', preco: 22, img: 'https://www.gravatar.com/avatar/24?d=monsterid&f=y'},
    {nome: 'test2', preco: 17, img: 'https://www.gravatar.com/avatar/24?d=monsterid&f=y'}
  ]

  ngOnInit() {
  }

}

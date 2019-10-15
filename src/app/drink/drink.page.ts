import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.page.html',
  styleUrls: ['./drink.page.scss'],
})
export class DrinkPage implements OnInit {

  public listaBebida = [
    { nome: 'Amazake', preco: 7.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGt1VbYsQ_5N9SydlBkiPeo3TUbIs6mtozmfsHEoBIIdq3iquH' },
    { nome: 'Shochu', preco: 10.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFYwPNA7fqY0MQ5iu_1W_02uAX-hieIMcoAlq9p99uTVtQxxVT' },
    { nome: 'Awamori', preco: 15.50, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGjgkEut1rIeE-g37jtryV40MQFIJrCssh1QHRSBlgZhHuMnii' },
    { nome: 'Umeshu', preco: 7.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwusqZHN-BUJkBKFg9HWEgVVN-L0XBxkzEweyOiG12bmsiGhSR' },
    { nome: 'Sake', preco: 6.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5tZe6UvQvwjB351Jbqte1vzkc6pmeY5huc8uxc5ZVbWBuceSZ'},
    { nome: 'Habushu', preco: 10.99 , descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz53qLtowbmt2AatHiJwrb2-3kj2Vyd_yY5tUSzcdAyhAiw-Bm' },
    { nome: 'Sakurayu', preco: 8.99, descricao: '', img: 'https://www.bunganusantara.com/blog/wp-content/uploads/2015/02/20141215183737-2-sakurayu-003-tantri-setyorini.jpg' }
  ];

  constructor() {
    this.inicia();
  }

  public listaFiltrada = [];

  public inicia() {
    this.listaFiltrada = this.listaBebida;
  }

  public buscaComida(evento) {
    this.inicia();
    let busca: string = evento.target.value;

    if (busca && busca.trim() !== '') {
      this.listaFiltrada = this.listaFiltrada.filter(item => {
        return item.nome.toLowerCase().includes(busca.toLowerCase());
      })
    }
  }
  
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FoodDescriptionService } from '../services/food-description.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.page.html',
  styleUrls: ['./drink.page.scss'],
})
export class DrinkPage implements OnInit {

  public listaBebida = [
    { nome: 'Amazake', preco: 7.00, descricao: 'Amazake, ou ama-saquê, é um vinho de arroz japonês doce, de teor alcoólico baixo, fabricado pela fermentação do arroz.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGt1VbYsQ_5N9SydlBkiPeo3TUbIs6mtozmfsHEoBIIdq3iquH' },
    { nome: 'Shochu', preco: 10.00, descricao: 'Shochu ou xochu é uma bebida destilada típica do Japão. Costuma ser destilada a partir da cevada, batata doce ou arroz, e tem uma graduação alcoólica de cerca de 25%.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFYwPNA7fqY0MQ5iu_1W_02uAX-hieIMcoAlq9p99uTVtQxxVT' },
    { nome: 'Awamori', preco: 15.50, descricao: 'A bebida é feita a partir de grãos do arroz longo asiático Oryza sativa, e não é um produto direto da fermentação, mas dadestilação.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGjgkEut1rIeE-g37jtryV40MQFIJrCssh1QHRSBlgZhHuMnii' },
    { nome: 'Umeshu', preco: 7.00, descricao: 'Umeshu é um licor japonês feito de maceração de frutas em álcool e açúcar. Tem um sabor doce e azedo e um teor de álcool de 10 a 15%.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwusqZHN-BUJkBKFg9HWEgVVN-L0XBxkzEweyOiG12bmsiGhSR' },
    { nome: 'Sake', preco: 6.00, descricao: 'É uma bebida alcoólica fermentada tradicional do Japão, produzida a partir de 3 ingredientes principais arroz, água e kōji.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5tZe6UvQvwjB351Jbqte1vzkc6pmeY5huc8uxc5ZVbWBuceSZ'},
    { nome: 'Habushu', preco: 10.99 , descricao: 'O Habushu é uma forma tradicional de licor de arroz de Okinawa que vem com uma víbora venenosa com presas enrolada no fundo da garrafa.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz53qLtowbmt2AatHiJwrb2-3kj2Vyd_yY5tUSzcdAyhAiw-Bm' },
    { nome: 'Sakurayu', preco: 8.99, descricao: 'Sakurayu, Sakura-cha, ou "chá de flor de cerejeira", é uma bebida quente baseada em infusão da culinária japonesa, criada pela mistura de flores de cerejeira em conserva com água quente. Essa combinação se torna uma espécie de chá herbal, e é tradicional na cultura do Leste asiático há muitas gerações.', img: 'https://www.bunganusantara.com/blog/wp-content/uploads/2015/02/20141215183737-2-sakurayu-003-tantri-setyorini.jpg' }
  ];

  constructor(public drink: FoodDescriptionService) {
    this.inicia();
  }

  public view(drink) {
    this.drink.setDados('prato', drink);
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

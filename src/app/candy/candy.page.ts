import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.page.html',
  styleUrls: ['./candy.page.scss'],
})
export class CandyPage implements OnInit {

  public listaDoces = [
    { nome: 'Taiyaki', preco: 12.00, descricao: '', img: 'https://i4.chefiso.com/srv/images/taiyaki-thumbnail-400x400.jpg' },
    { nome: 'Wagashi', preco: 8.00, descricao: '', img: 'https://www.wochikochi.jp/english/foreign/assets_c/2012/10/wagashi_asia01-thumb-680x420-8782.jpg' },
    { nome: 'Dorayaki', preco: 10.50, descricao: '', img: 'https://www.japaoemfoco.com/wp-content/uploads/2014/03/dorayaki-qorokke.jp_.jpg' },
    { nome: 'Daifuku', preco: 20.00, descricao: '', img: 'https://images.japancentre.com/recipes/pics/386/main/ichigo-daifuku.jpg?1546595136' },
    { nome: 'Manju', preco: 14.00, descricao: '', img: 'https://img.cybercook.com.br/imagens/receitas/455/fukashi-manju-360x220.jpg' },
    { nome: 'Warabi Mochi', preco: 8.00, descricao: '', img: 'https://uncutrecipes.com/Images-Recipes-Japanese/Warabi-Mochi.jpg' },
    { nome: 'Sanshoku Dango', preco: 3.00, descricao: '', img: 'https://i.pinimg.com/originals/da/d0/11/dad01186539a52b14f0ba0e85d36ed0a.jpg' }
  ];

  constructor() {
    this.inicia();
  }

  public listaFiltrada = [];

  public inicia() {
    this.listaFiltrada = this.listaDoces;
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

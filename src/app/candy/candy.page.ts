import { Component, OnInit } from '@angular/core';
import { FoodDescriptionService } from '../services/food-description.service';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.page.html',
  styleUrls: ['./candy.page.scss'],
})
export class CandyPage implements OnInit {

  public listaDoces = [
    { nome: 'Taiyaki', preco: 12.00, descricao: 'Taiyaki é um bolo japonês em formato de peixe. O recheio mais comum é o de pasta de feijão vermelho, que é feito com feijões azuki adocicados.', img: 'https://i4.chefiso.com/srv/images/taiyaki-thumbnail-400x400.jpg' },
    { nome: 'Wagashi', preco: 8.00, descricao: 'Wagashi é um confeito tradicional japonês que é geralmente servido com chá, especialmente os tipos feitos de mochi, anko, e frutas. O wagashi é normalmente feito de ingredientes das plantas.', img: 'https://www.wochikochi.jp/english/foreign/assets_c/2012/10/wagashi_asia01-thumb-680x420-8782.jpg' },
    { nome: 'Dorayaki', preco: 10.50, descricao: 'Dorayaki é um tipo de doce japonês, uma panqueca de feijão vermelho que consiste de duas pequenas panquecas feitas de castela enroladas com um recheio de pasta de feijão azuki.', img: 'https://www.japaoemfoco.com/wp-content/uploads/2014/03/dorayaki-qorokke.jp_.jpg' },
    { nome: 'Daifuku', preco: 20.00, descricao: 'Daifuku, é um confeito japonês que consiste em pequenas bolas de mochi recheado com algo doce, geralmente anko, pasta de feijão vermelho adocicado feito de feijão-azuqui.', img: 'https://images.japancentre.com/recipes/pics/386/main/ichigo-daifuku.jpg?1546595136' },
    { nome: 'Manju', preco: 14.00, descricao: 'É um doce cozido no vapor muito popular no Japão. São feitos de uma massa de farinha de trigo, farinha de arroz e trigo sarraceno, e que geralmente é recheada com pasta de feijão azuki.', img: 'https://img.cybercook.com.br/imagens/receitas/455/fukashi-manju-360x220.jpg' },
    { nome: 'Warabi Mochi', preco: 8.00, descricao: 'É uma confecção gelatinosa feita de amido de Bracken e coberta ou mergulhada em kinako. Difere do verdadeiro mochi feito de arroz glutinoso.', img: 'https://uncutrecipes.com/Images-Recipes-Japanese/Warabi-Mochi.jpg' },
    { nome: 'Sanshoku Dango', preco: 3.00, descricao: 'Bolinho japonês feito de mochiko (farinha de arroz). Ele é servido num espeto com 3 ou 4 dangos, e costuma ser comido com chá verde.', img: 'https://i.pinimg.com/originals/da/d0/11/dad01186539a52b14f0ba0e85d36ed0a.jpg' }
  ];

  constructor(public candy: FoodDescriptionService) {
    this.inicia();
  }

  public comer(candy) {
    this.candy.setDados('prato', candy);
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

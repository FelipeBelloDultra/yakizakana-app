import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public listaCardapio = [
    { nome: 'Sushi', preco: 22.00, descricao: '', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
    { nome: 'Sashimi', preco:  30.00, descricao: '', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
    { nome: 'Hossomakis', preco:  17.50, descricao: '', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
    { nome: 'Yakisoba', preco:  15.00, descricao: '', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
    { nome: 'Robata', preco:  20.00, descricao: '', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
    { nome: 'Uramakis', preco:  9.99, descricao: '', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
    { nome: 'Niguiri', preco:  10.00, descricao: '', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
    { nome: 'Tempura', preco:  30.00, descricao: '', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
    { nome: 'Wasabi', preco:  23.00, descricao: '', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
    { nome: 'Temakis', preco:  8.80, descricao: '', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' },
    { nome: 'Ramen', preco:  8.80, descricao: '', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' }

  ];

  public listaFiltrada = [];

  public inicia() {
    this.listaFiltrada = this.listaCardapio;
  }

  constructor() {
    this.inicia();
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
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
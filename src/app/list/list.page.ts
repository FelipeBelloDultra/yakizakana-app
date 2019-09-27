import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  listaCardapio = [{nome: 'Sushi', preco: 'R$ 22,00', descricao: 'Sushi é um prato da culinária japonesa que possui origem numa antiga técnica de conservação da carne de peixe em arroz avinagrado.', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'},
                  {nome: 'Sashimi', preco: 'R$ 30,00', descricao: 'Sashimi é uma iguaria da culinária japonesa que consiste de peixes e frutos do mar muito frescos, fatiados em pequenos pedaços e servidos apenas com algum tipo de molho, e guarnições simples como shiso e raiz de daikon fatiada. ', img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'}];


  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
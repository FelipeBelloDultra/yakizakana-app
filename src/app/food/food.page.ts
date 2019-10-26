import { Component, OnInit } from '@angular/core';
import { FoodDescriptionService } from '../services/food-description.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  public listaPrato = [
    { nome: 'Sushi', preco: 22.00, descricao: 'Sushi é um prato da culinária japonesa que possui origem numa antiga técnica de conservação da carne de peixe em arroz avinagrado.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYUN5eVrPefcHyHd0r_cOWED5MT5wHtK7_0eHtHjFzOjQyLoW4' },
    { nome: 'Sashimi', preco:  30.00, descricao: 'Sashimi é uma iguaria da culinária japonesa que consiste de peixes e frutos do mar muito frescos, fatiados em pequenos pedaços e servidos apenas com algum tipo de molho,.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHtMr6dWrjqW1867_bQf5Njh52QSESiB2S5jJZQTzw1UQioVG3' },
    { nome: 'Hossomakis', preco:  17.50, descricao: 'Hossomaki é um tipo de sushi que possui um diâmetro menor e leva, geralmente, apenas um ingrediente em seu recheio.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiUdIdoLQ6HbK0AFyoSrVSmbbvp7l7Mpf6mu9pBuhllNy7KrJ5' },
    { nome: 'Yakisoba', preco:  15.00, descricao: 'Prato muito popular na culinária japonesa, feito de macarrão refogado com legumes e carnes, temperado com um molho específico.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrP__9MI7fbs8jWqOtWA4Yn3r0EPHxnfzAru3XUx6-M3xRXD7R' },
    { nome: 'Robata', preco:  20.00, descricao: 'Refere-se a um método de cozimento semelhante ao churrasco em que os alimentos são cozidos em velocidades variadas sobre o carvão quente.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhn_c4PN5Q7846pjpG0pzZiI5ixzuoUbVWxeRGx_pAwcXm2bTU' },
    { nome: 'Uramaki', preco:  9.99, descricao: 'Sushi enrolado ao contrário. Ou seja, o arroz fica na parte externa e o nori, no lado interno. Ele pode levar dois ou mais ingredientes em seu recheio.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrAAD3kKGkIhNTs6UH8tN1dBAXtEfT2ys9iE8ibo37bac_qqy3' },
    { nome: 'Niguiri', preco:  10.00, descricao: 'Bolinho de arroz com formato alongado, moldado à mão e coberto normalmente por uma fatia de peixe, polvo ou camarão.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmqPdnThCXy45m3bz2avKGjZs-bT7jKBVIdMhNiToeDFrsea43' },
    { nome: 'Tempura', preco:  30.00, descricao: 'Consiste de pedaços fritos de vegetais ou mariscos envoltos num polme fino. A fritura é realizada em óleo muito quente, durante apenas cerca de dois ou três minutos.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5hnJVqFt4LxD6cZGKrHYiS6ygCwigds4sdY1c29oNmqgQ1AVQ' },
    { nome: 'Wasabi', preco:  23.00, descricao: 'É comumente conhecido como raiz-forte japonesa. O Wasabi tem um sabor forte e picante, diferente do sabor da capsaicina, a substância química encontrada nas pimentas.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRnSjNIYJw_C6lOkCW1qkp0Hr098fz43MW46ikfQu5Ifjx4x9-' },
    { nome: 'Temaki', preco:  8.80, descricao: 'O temaki é um sushi enrolado à mão em formato de cone. É composto pelo nori na parte externa e arroz e demais ingredientes que podem ser peixes, frutos do mar, legumes e frutas, no seu interior.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXscIr91pQ0j5S6AIGxWUDxokvc2Jsg2kd0rnVOr3obTtAR9Nc' },
    { nome: 'Ramen', preco:  8.80, descricao: 'Um prato de ramen normalmente é composto por um tipo de macarrão chinês, uma sopa com caldo à base de ossos de porco, peixe ou frango, e temperados com uma base tarê que da sabor ao caldo base,', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9m29k2xsO2VciFKm0bWhhK1al5uDi1tlZt5dmtDPcwCXTAXEn' }
  ];

  constructor(public food: FoodDescriptionService) {
    this.inicia();
  }

  public comer(food) {
    this.food.setDados('prato', food);
  }

  public listaFiltrada = [];

  public inicia() {
    this.listaFiltrada = this.listaPrato;
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

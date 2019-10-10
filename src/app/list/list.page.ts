import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public listaCardapio = [
    { nome: 'Sushi', preco: 22.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYUN5eVrPefcHyHd0r_cOWED5MT5wHtK7_0eHtHjFzOjQyLoW4' },
    { nome: 'Sashimi', preco:  30.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHtMr6dWrjqW1867_bQf5Njh52QSESiB2S5jJZQTzw1UQioVG3' },
    { nome: 'Hossomakis', preco:  17.50, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiUdIdoLQ6HbK0AFyoSrVSmbbvp7l7Mpf6mu9pBuhllNy7KrJ5' },
    { nome: 'Yakisoba', preco:  15.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrP__9MI7fbs8jWqOtWA4Yn3r0EPHxnfzAru3XUx6-M3xRXD7R' },
    { nome: 'Robata', preco:  20.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhn_c4PN5Q7846pjpG0pzZiI5ixzuoUbVWxeRGx_pAwcXm2bTU' },
    { nome: 'Uramakis', preco:  9.99, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrAAD3kKGkIhNTs6UH8tN1dBAXtEfT2ys9iE8ibo37bac_qqy3' },
    { nome: 'Niguiri', preco:  10.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmqPdnThCXy45m3bz2avKGjZs-bT7jKBVIdMhNiToeDFrsea43' },
    { nome: 'Tempura', preco:  30.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5hnJVqFt4LxD6cZGKrHYiS6ygCwigds4sdY1c29oNmqgQ1AVQ' },
    { nome: 'Wasabi', preco:  23.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRnSjNIYJw_C6lOkCW1qkp0Hr098fz43MW46ikfQu5Ifjx4x9-' },
    { nome: 'Temakis', preco:  8.80, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXscIr91pQ0j5S6AIGxWUDxokvc2Jsg2kd0rnVOr3obTtAR9Nc' },
    { nome: 'Ramen', preco:  8.80, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9m29k2xsO2VciFKm0bWhhK1al5uDi1tlZt5dmtDPcwCXTAXEn' },
    { nome: 'Niguiri', preco:  10.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmqPdnThCXy45m3bz2avKGjZs-bT7jKBVIdMhNiToeDFrsea43' },
    { nome: 'Tempura', preco:  30.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5hnJVqFt4LxD6cZGKrHYiS6ygCwigds4sdY1c29oNmqgQ1AVQ' },
    { nome: 'Wasabi', preco:  23.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRnSjNIYJw_C6lOkCW1qkp0Hr098fz43MW46ikfQu5Ifjx4x9-' },
    { nome: 'Temakis', preco:  8.80, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXscIr91pQ0j5S6AIGxWUDxokvc2Jsg2kd0rnVOr3obTtAR9Nc' },
    { nome: 'Ramen', preco:  8.80, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9m29k2xsO2VciFKm0bWhhK1al5uDi1tlZt5dmtDPcwCXTAXEn' },
    { nome: 'Niguiri', preco:  10.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmqPdnThCXy45m3bz2avKGjZs-bT7jKBVIdMhNiToeDFrsea43' },
    { nome: 'Tempura', preco:  30.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5hnJVqFt4LxD6cZGKrHYiS6ygCwigds4sdY1c29oNmqgQ1AVQ' },
    { nome: 'Wasabi', preco:  23.00, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRnSjNIYJw_C6lOkCW1qkp0Hr098fz43MW46ikfQu5Ifjx4x9-' },
    { nome: 'Temakis', preco:  8.80, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXscIr91pQ0j5S6AIGxWUDxokvc2Jsg2kd0rnVOr3obTtAR9Nc' },
    { nome: 'Ramen', preco:  8.80, descricao: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9m29k2xsO2VciFKm0bWhhK1al5uDi1tlZt5dmtDPcwCXTAXEn' }
  ];

  constructor() {
    this.inicia();
  }

  public listaFiltrada = [];

  public inicia() {
    this.listaFiltrada = this.listaCardapio;
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
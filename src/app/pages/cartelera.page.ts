import { Component } from '@angular/core';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.page.html',
  styleUrls: ['./cartelera.page.scss'],
})
export class CarteleraPage {

  movies = [
    {
      name: 'Spider Man Across the SpiderVerse',
      image: 'assets/movies/movie1.jpg'
    },
    {
      name: 'Man of Steel',
      image: 'assets/movies/movie2.jpg'
    },
    {
      name: 'Pacific Rim',
      image: 'assets/movies/movie3.jpg'
    },
    {
      name: 'Avatar',
      image: 'assets/movies/movie4.jpg'
    },
    {
      name: 'Avengers Endgame',
      image: 'assets/movies/movie5.jpg'
    },
    {
      name: 'Que Paso Ayer? parte3',
      image: 'assets/movies/movie6.jpg'
    }
  ];

  constructor() { }

}


import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class HomePage {

  movies = [
    {
      name: 'Gru Mi villano favorito 4',
      image: 'assets/movies/movie1.jpg'
    },
    {
      name: 'El bus de la vida',
      image: 'assets/movies/movie2.jpg'
    },
    {
      name: 'Fly Me to the Moon ',
      image: 'assets/movies/movie3.jpg'
    },
    
  ];

  constructor() { }

}

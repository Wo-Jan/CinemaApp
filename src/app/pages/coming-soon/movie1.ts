import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: 'movie-details.page.html',
  styleUrls: ['movie-details.page.scss'],
})
export class MovieDetailsPage {

  constructor(private modalController: ModalController) {}

  playTrailer() {
    console.log('Playing trailer...');
  }

  reserveTicket() {
    console.log('Reserve Now button clicked');
  }

}


import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {

  constructor(private modalController: ModalController) {}

  playTrailer() {
    console.log('Playing trailer...');
  }

  bookTicket() {
    console.log('Booking button clicked');
  }

}
